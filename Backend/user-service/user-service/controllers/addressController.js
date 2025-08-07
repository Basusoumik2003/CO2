const pool = require("../config/db");

// Create address
exports.createAddress = async (req, res) => {
  try {
    const { pro_id, area, city, state, country, pin_code, label } = req.body;

    if (!pro_id) {
      return res.status(400).json({ message: "pro_id is required" });
    }

    await pool.query(
      `INSERT INTO addresses (pro_id, area, city, state, country, pin_code, label)
       VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [pro_id, area, city, state, country, pin_code, label]
    );

    res.status(201).json({ message: "Address created successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error creating address" });
  }
};

// Update address
exports.updateAddress = async (req, res) => {
  try {
    const { address_id } = req.params;
    const { area, city, state, country, pin_code, label } = req.body;

    const result = await pool.query(
      `UPDATE addresses
       SET area = $1, city = $2, state = $3, country = $4, pin_code = $5, label = $6
       WHERE address_id = $7`,
      [area, city, state, country, pin_code, label, address_id]
    );

    if (result.rowCount === 0) {
      return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json({ message: "Address updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error updating address" });
  }
};

// Get all addresses for a profile
exports.getAddressesByProfile = async (req, res) => {
  try {
    const { pro_id } = req.params;

    const result = await pool.query(
      `SELECT * FROM addresses WHERE pro_id = $1`,
      [pro_id]
    );

    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching addresses" });
  }
};

// Get single address by ID
exports.getAddressById = async (req, res) => {
  try {
    const { address_id } = req.params;

    const result = await pool.query(
      `SELECT * FROM addresses WHERE address_id = $1`,
      [address_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Address not found" });
    }

    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error fetching address" });
  }
};
