const express = require("express");
const router = express.Router();
const db = require("../config/db"); // pg Pool

// Generate ticket ID like TKT-0001
const generateTicketId = async () => {
  const result = await db.query(`SELECT ticket_id FROM contacts ORDER BY created_at DESC LIMIT 1`);
  if (result.rows.length === 0) return "TKT-0001"; // First ticket
  const lastId = result.rows[0].ticket_id;
  const lastNumber = parseInt(lastId.replace("TKT-", ""), 10);
  const newNumber = (lastNumber + 1).toString().padStart(4, "0");
  return `TKT-${newNumber}`;
};

// POST: Create new contact ticket
router.post("/", async (req, res) => {
  const { u_id, firstName, lastName, email, company, message } = req.body;
  if (!u_id) return res.status(400).json({ error: "User ID is required" });

  try {
    const ticketId = await generateTicketId(); // Generate new ticket id

    const sql = `
      INSERT INTO contacts (ticket_id, u_id, first_name, last_name, email, company, message)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING ticket_id;
    `;

    const result = await db.query(sql, [ticketId, u_id, firstName, lastName, email, company, message]);
    res.status(201).json({ success: true, ticket_id: result.rows[0].ticket_id });
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

// GET: Fetch all tickets with user info
router.get("/", async (req, res) => {
  const sql = `
    SELECT c.ticket_id, c.u_id, u.username, c.first_name, c.last_name, c.email, 
           c.company, c.message, c.created_at
    FROM contacts c
    JOIN usertable u ON c.u_id = u.u_id
    ORDER BY c.created_at DESC;
  `;
  try {
    const results = await db.query(sql);
    res.json(results.rows);
  } catch (err) {
    console.error("Database Error:", err);
    res.status(500).json({ error: "Database error" });
  }
});

module.exports = router;
