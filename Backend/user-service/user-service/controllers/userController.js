const pool = require("../config/db");

// Helper ID generator
const generateProId = () => "P" + Math.floor(1000 + Math.random() * 9000);

// Save or update profile
exports.saveProfile = async (req, res) => {
  try {
    console.log('Received profile data:', req.body);
    
    const { u_id, first_name, last_name, phone_num, dob } = req.body;

    if (!u_id) {
      return res.status(400).json({ message: "u_id is required" });
    }

    // Validate required fields
    if (!first_name || !last_name) {
      return res.status(400).json({ message: "first_name and last_name are required" });
    }

    const existingProfile = await pool.query(`SELECT * FROM users WHERE u_id = $1`, [u_id]);

    if (existingProfile.rows.length > 0) {
      await pool.query(
        `UPDATE users SET first_name = $1, last_name = $2, phone_num = $3, dob = $4 WHERE u_id = $5`,
        [first_name, last_name, phone_num, dob, u_id]
      );

      return res.status(200).json({
        message: "Profile updated successfully",
        pro_id: existingProfile.rows[0].pro_id,
      });
    } else {
      const pro_id = generateProId();

      await pool.query(
        `INSERT INTO users (pro_id, u_id, first_name, last_name, phone_num, dob)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [pro_id, u_id, first_name, last_name, phone_num, dob]
      );

      return res.status(200).json({ message: "Profile created successfully", pro_id });
    }
  } catch (err) {
    console.error("Error in saveProfile:", err);
    console.error("Error details:", {
      message: err.message,
      stack: err.stack,
      code: err.code
    });
    res.status(500).json({ 
      message: "Error saving profile", 
      error: err.message,
      details: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
  }
};

// Get profile by u_id
exports.getProfileByUserId = async (req, res) => {
  try {
    const { uid } = req.params;

    const result = await pool.query(`SELECT * FROM users WHERE u_id = $1`, [uid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all profiles
exports.getAllProfiles = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM users`);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching profiles" });
  }
};
