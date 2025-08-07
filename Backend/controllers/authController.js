const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db");

const registerUser = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Check if user already exists
    const existing = await pool.query("SELECT * FROM usertable WHERE email = $1", [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Generate U_Id like 'USR0001'
    const idResult = await pool.query("SELECT nextval(pg_get_serial_sequence('usertable', 'id')) AS next_id");
    const nextId = idResult.rows[0].next_id;
    const uId = `USR${nextId.toString().padStart(4, "0")}`;

    const createDate = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

    const newUser = await pool.query(
      `INSERT INTO usertable (u_id, username, email, password, role, create_date)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [uId, username, email, hashedPassword, role === "user" ? "U" : "O", createDate]
    );

    // ✅ Insert into credittable with 0 token_value for this new user
    await pool.query(
      `INSERT INTO credittable (uid, token_value) VALUES ($1, 0)`,
      [uId]
    );

    const token = jwt.sign({ id: newUser.rows[0].id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    const roleValue = newUser.rows[0].role === "O" ? "organization" : "user";

    res.status(201).json({
      user: {
        username: newUser.rows[0].username,
        email: newUser.rows[0].email,
        role: roleValue,
        u_id: newUser.rows[0].u_id
      },
      token,
    });

  } catch (err) {
    console.error("Registration Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const userQuery = await pool.query("SELECT * FROM usertable WHERE email = $1", [email]);
    if (userQuery.rows.length === 0) {
      return res.status(400).json({ message: "User not found" });
    }

    const user = userQuery.rows[0];
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({
      user: {
        username: user.username,
        email: user.email,
        role: user.role,
        u_id: user.u_id
      },
      token,
    });
  } catch (err) {
    console.error("Login Error:", err);
    res.status(500).json({ error: err.message });
  }
};

const logoutUser = async (req, res) => {
  res.status(200).json({ message: "Logged out successfully" });
};

module.exports = { registerUser, loginUser, logoutUser };
