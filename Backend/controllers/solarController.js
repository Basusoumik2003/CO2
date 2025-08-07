const pool = require('../db');

// ✅ Create Solar Panel Entry
exports.createSolarEntry = async (req, res) => {
  const {
    SUID, U_ID, Installed_Capacity, Installation_Date,
    Energy_Generation_Value, Grid_Emission_Factor, Inverter_Type
  } = req.body;

  // Validate fields
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
    // Insert into Solar table
    const result = await pool.query(
      `INSERT INTO Solar_Panel_Master_Data (
        SUID, U_ID, Installed_Capacity, Installation_Date,
        Energy_Generation_Value, Grid_Emission_Factor, Inverter_Type
      ) VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [
        SUID, U_ID, Installed_Capacity, Installation_Date,
        Energy_Generation_Value, Grid_Emission_Factor, Inverter_Type
      ]
    );

    const savedSolar = result.rows[0];

    // Insert into admin_assets
    await pool.query(
      `INSERT INTO admin_assets (admin_u_id, asset_type, asset_id)
       VALUES ($1, 'Solar', $2)`,
      [U_ID, savedSolar.suid]
    );

    // Get user solar count
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
// ✅ Update Solar Panel Entry
exports.updateSolarEntry = async (req, res) => {
  const { suid } = req.params; // Panel ID to update
  const {
    Installed_Capacity,
    Installation_Date,
    Energy_Generation_Value,
    Grid_Emission_Factor,
    Inverter_Type
  } = req.body;

  // Validate input: At least one field must be provided
  if (
    Installed_Capacity === undefined &&
    Installation_Date === undefined &&
    Energy_Generation_Value === undefined &&
    Grid_Emission_Factor === undefined &&
    Inverter_Type === undefined
  ) {
    return res.status(400).json({
      status: 'error',
      message: 'At least one field must be provided to update'
    });
  }

  try {
    // Build dynamic update query
    const fields = [];
    const values = [];
    let index = 1;

    if (Installed_Capacity !== undefined) {
      fields.push(`Installed_Capacity = $${index++}`);
      values.push(Installed_Capacity);
    }
    if (Installation_Date !== undefined) {
      fields.push(`Installation_Date = $${index++}`);
      values.push(Installation_Date);
    }
    if (Energy_Generation_Value !== undefined) {
      fields.push(`Energy_Generation_Value = $${index++}`);
      values.push(Energy_Generation_Value);
    }
    if (Grid_Emission_Factor !== undefined) {
      fields.push(`Grid_Emission_Factor = $${index++}`);
      values.push(Grid_Emission_Factor);
    }
    if (Inverter_Type !== undefined) {
      fields.push(`Inverter_Type = $${index++}`);
      values.push(Inverter_Type);
    }

    // Add SUID to WHERE clause
    values.push(suid);

    const query = `
      UPDATE Solar_Panel_Master_Data
      SET ${fields.join(', ')}
      WHERE SUID = $${index}
      RETURNING *;
    `;

    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({
        status: 'error',
        message: 'Solar panel entry not found'
      });
    }

    res.status(200).json({
      status: 'success',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Update Solar Error:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to update solar panel data',
      error: error.message
    });
  }
};
