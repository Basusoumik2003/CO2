// const pool = require("../db");

// // ========== Update or Insert Credit ========== 
// exports.updateCredit = async (req, res) => {
//   try {
//     const { uid, token_value } = req.body;

//     if (!uid) {
//       return res.status(400).json({ message: "uid is required" });
//     }

//     const existingCredit = await pool.query(`SELECT * FROM credittable WHERE uid = $1`, [uid]);

//     if (existingCredit.rows.length > 0) {
//       await pool.query(`UPDATE credittable SET token_value = $1 WHERE uid = $2`, [token_value, uid]);
//       res.status(200).json({ message: "Credit updated successfully" });
//     } else {
//       await pool.query(`INSERT INTO credittable (uid, token_value) VALUES ($1, $2)`, [uid, token_value]);
//       res.status(200).json({ message: "Credit added successfully" });
//     }
//   } catch (err) {
//   console.error(err);
//   res.status(500).json({ message: "Error updating credit", error: err.message, stack: err.stack });
// }

// };

// // ========== Get Credit by UID ========== 
// exports.getCreditByUid = async (req, res) => {
//   try {
//     const { uid } = req.params;

//     const result = await pool.query(`SELECT * FROM credittable WHERE uid = $1`, [uid]);

//     if (result.rows.length === 0) {
//       return res.status(404).json({ message: "Credit not found", token_value: 0 });
//     }

//     res.status(200).json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching credit" });
//   }
// };

// // ========== Get All Credits (optional) ==========
// exports.getAllCredits = async (req, res) => {
//   try {
//     const result = await pool.query(`SELECT * FROM credittable`);
//     res.status(200).json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: "Error fetching credits" });
//   }
// };
const pool = require("../db");

// ========== Initialize Credit Entry If Not Exists ==========
// ========== Ensure credit is initialized (for fallback from frontend) ==========
exports.initCreditIfNotExists = async (req, res) => {
  const { uid } = req.body;

  try {
    const check = await pool.query(`SELECT * FROM credittable WHERE uid = $1`, [uid]);

    if (check.rows.length === 0) {
      await pool.query(`INSERT INTO credittable (uid, token_value) VALUES ($1, 0)`, [uid]);
      return res.status(201).json({ message: "Credit initialized" });
    }

    res.status(200).json({ message: "Credit already exists" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Credit init failed", error: err.message });
  }
};


// ========== Update or Insert Credit ==========
exports.updateCredit = async (req, res) => {
  try {
    const { uid, token_value } = req.body;

    if (!uid) {
      return res.status(400).json({ message: "uid is required" });
    }

    const existingCredit = await pool.query(`SELECT * FROM credittable WHERE uid = $1`, [uid]);

    if (existingCredit.rows.length > 0) {
      await pool.query(
        `UPDATE credittable SET token_value = $1 WHERE uid = $2`,
        [token_value, uid]
      );
      res.status(200).json({ message: "Credit updated successfully" });
    } else {
      await pool.query(
        `INSERT INTO credittable (uid, token_value) VALUES ($1, $2)`,
        [uid, token_value]
      );
      res.status(200).json({ message: "Credit added successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating credit", error: err.message });
  }
};

// ========== Get Credit by UID ==========
exports.getCreditByUid = async (req, res) => {
  try {
    const { uid } = req.params;

    const result = await pool.query(`SELECT * FROM credittable WHERE uid = $1`, [uid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Credit not found", token_value: 0 });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching credit" });
  }
};


// ========== Get All Credits ==========
exports.getAllCredits = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM credittable`);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching credits" });
  }
};
