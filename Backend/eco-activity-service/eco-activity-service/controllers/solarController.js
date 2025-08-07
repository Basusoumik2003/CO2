const pool = require('../config/db');

// ✅ Create Solar Panel Entry
exports.createSolarEntry = async (req, res) => {
  const {
    SUID, U_ID, Installed_Capacity, Installation_Date,
    Energy_Generation_Value,
    Grid_Emission_Factor, Inverter_Type
  } = req.body;

  // ✅ Validate all required fields
  const requiredFields = {
    SUID,
    U_ID,
    Installed_Capacity,
    Installation_Date,
    Energy_Generation_Value,
    Grid_Emission_Factor,
    Inverter_Type
  };

  for (const [key, value] of Object.entries(requiredFields)) {
    if (
      value === undefined ||
      value === null ||
      value === '' ||
      (typeof value === 'string' && value.trim() === '')
    ) {
      return res.status(400).json({
        status: 'error',
        message: `Missing or empty required field: ${key}`
      });
    }
  }

  try {
    // ✅ Insert new solar panel
    const result = await pool.query(
      `INSERT INTO Solar_Panel_Master_Data (
        SUID, U_ID, Installed_Capacity, Installation_Date,
        Energy_Generation_Value,
        Grid_Emission_Factor, Inverter_Type
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [
        SUID, U_ID, Installed_Capacity, Installation_Date,
        Energy_Generation_Value,
        Grid_Emission_Factor, Inverter_Type
      ]
    );

    const savedSolar = result.rows[0];

    // ✅ Count total for user
    const countResult = await pool.query(
      `SELECT COUNT(*) FROM Solar_Panel_Master_Data WHERE U_ID = $1`,
      [U_ID]
    );

    const solarCount = parseInt(countResult.rows[0].count, 10);

    res.status(201).json({
      status: 'success',
      data: savedSolar,
      solarCount
    });
  } catch (error) {
    console.error('Insert Solar Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to insert solar panel data',
      error: error.message
    });
  }
};

exports.getRecentSolarPanelsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM Solar_Panel_Master_Data WHERE U_ID = $1 ORDER BY created_at DESC LIMIT 5`,
      [userId]
    );

    res.status(200).json({
      status: 'success',
      data: result.rows
    });
  } catch (error) {
    console.error('Fetch recent Solar panels error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch recent solar panels' });
  }
};

// ✅ Fetch Solar Panels and Count for User
exports.getSolarPanelsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM Solar_Panel_Master_Data WHERE U_ID = $1`,
      [userId]
    );

    const count = result.rowCount;

    res.status(200).json({
      status: 'success',
      data: result.rows,
      count
    });

    console.log('Payload received in backend:', req.body);
  } catch (error) {
    console.error('Fetch Solar Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch solar panel data'
    });
  }
};

// ✅ Delete Solar Panel by ID
exports.deleteSolarPanelById = async (req, res) => {
  const { solarId } = req.params;

  try {
    // First check if the solar panel exists
    const checkResult = await pool.query(
      `SELECT * FROM Solar_Panel_Master_Data WHERE Solar_ID = $1`,
      [solarId]
    );

    if (checkResult.rowCount === 0) {
      return res.status(404).json({ 
        status: 'error', 
        message: 'Solar panel not found' 
      });
    }

    // Delete the solar panel
    const result = await pool.query(
      `DELETE FROM Solar_Panel_Master_Data WHERE Solar_ID = $1 RETURNING *`,
      [solarId]
    );

    console.log('✅ Solar panel deleted successfully:', result.rows[0]);

    res.status(200).json({ 
      status: 'success', 
      message: 'Solar panel deleted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Delete Solar Panel Error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to delete solar panel',
      error: error.message
    });
  }
};