const pool = require("../db");

// ========== Helper functions ==========
const generatePid = () => "P" + Math.floor(1000 + Math.random() * 9000);
const generateAid = () => "A" + Math.floor(1000 + Math.random() * 9000);

// ========== Save or Update Profile ==========
exports.saveProfile = async (req, res) => {
  try {
    const { u_id, first_name, last_name, phone, dob } = req.body;

    if (!u_id) {
      return res.status(400).json({ message: "u_id is required" });
    }

    const existingProfile = await pool.query(`SELECT * FROM profile WHERE u_id = $1`, [u_id]);

    if (existingProfile.rows.length > 0) {
      await pool.query(
        `UPDATE profile 
         SET first_name = $1, last_name = $2, phone = $3, dob = $4 
         WHERE u_id = $5`,
        [first_name, last_name, phone, dob, u_id]
      );

      res.status(200).json({
        message: "Profile updated successfully",
        p_id: existingProfile.rows[0].p_id,
      });
    } else {
      const p_id = generatePid();

      await pool.query(
        `INSERT INTO profile (p_id, u_id, first_name, last_name, phone, dob)
         VALUES ($1, $2, $3, $4, $5, $6)`,
        [p_id, u_id, first_name, last_name, phone, dob]
      );

      res.status(200).json({ message: "Profile created successfully", p_id });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error saving profile" });
  }
};

// ========== Add Address ==========
exports.addAddress = async (req, res) => {
  try {
    const { p_id, area, city, state, country, pin_code } = req.body;

    if (!p_id) {
      return res.status(400).json({ message: "p_id is required" });
    }

    const a_id = generateAid();

    await pool.query(
      `INSERT INTO address (a_id, p_id, area, city, state, country, pin_code)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [a_id, p_id, area, city, state, country, pin_code]
    );

    res.status(200).json({ message: "Address saved successfully", a_id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding address" });
  }
};

// ========== Update Address ==========
exports.updateAddress = async (req, res) => {
  try {
    const { id } = req.params;
    const { area, city, state, country, pin_code } = req.body;

    const address = await pool.query(`SELECT * FROM address WHERE a_id = $1`, [id]);

    if (address.rows.length === 0) {
      return res.status(404).json({ message: "Address not found" });
    }

    await pool.query(
      `UPDATE address
       SET area = $1, city = $2, state = $3, country = $4, pin_code = $5
       WHERE a_id = $6`,
      [area, city, state, country, pin_code, id]
    );

    res.status(200).json({ message: "Address updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating address" });
  }
};

// ========== Delete Address ==========
exports.deleteAddress = async (req, res) => {
  try {
    const { id } = req.params;

    const address = await pool.query(`SELECT * FROM address WHERE a_id = $1`, [id]);

    if (address.rows.length === 0) {
      return res.status(404).json({ message: "Address not found" });
    }

    await pool.query(`DELETE FROM address WHERE a_id = $1`, [id]);

    res.status(200).json({ message: "Address deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error deleting address" });
  }
};

// ========== Get All Profiles ==========
exports.getAllProfiles = async (req, res) => {
  try {
    const result = await pool.query(`SELECT * FROM profile`);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching profiles" });
  }
};

// ========== Get Addresses by Profile ==========
exports.getAddressesByProfile = async (req, res) => {
  try {
    const { p_id } = req.params;

    const result = await pool.query(`SELECT * FROM address WHERE p_id = $1`, [p_id]);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching addresses" });
  }
};

// ========== Get Profile by User ID ==========
exports.getProfileByUserId = async (req, res) => {
  try {
    const { uid } = req.params;
    const result = await pool.query(`SELECT * FROM profile WHERE u_id = $1`, [uid]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Profile not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
