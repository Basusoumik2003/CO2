const pool = require('../db');

// ✅ Create EV Entry (existing code)
exports.createEVEntry = async (req, res) => {
  const {
    VUID, U_ID, Category, Manufacturers, Model, Purchase_Year,
    Energy_Consumed, Primary_Charging_Type, Range,
    Grid_Emission_Factor, Top_Speed, Charging_Time, Motor_Power
  } = req.body;

  try {
    // Insert new EV
   const result = await pool.query(
  `INSERT INTO EV_Master_Data (
    VUID, U_ID, Category, Manufacturers, Model, Purchase_Year,
    Energy_Consumed, Primary_Charging_Type, Range,
    Grid_Emission_Factor, Top_Speed, Charging_Time, Motor_Power
  ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
  RETURNING *`,
  [
    VUID, U_ID, Category, Manufacturers, Model, Purchase_Year,
    Energy_Consumed, Primary_Charging_Type, Range,
    Grid_Emission_Factor, Top_Speed, Charging_Time, Motor_Power
  ]
);

const savedEV = result.rows[0];
// ✅ Yeh galat tha: client.query
// ✅ Sahi: pool.query use karo
await pool.query(
  `INSERT INTO admin_assets (admin_u_id, asset_type, asset_id)
   VALUES ($1, 'EV', $2)`,
  [U_ID, savedEV.ev_id]
);


    // Get total count for this user
    const countResult = await pool.query(
      `SELECT COUNT(*) FROM EV_Master_Data WHERE U_ID = $1`,
      [U_ID]
    );
    const evCount = parseInt(countResult.rows[0].count, 10);

    res.status(201).json({ status: 'success', data: savedEV, evCount });
  } catch (error) {
    console.error('Insert EV Error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to insert EV data' });
  }
};
// ✅ NEW: Get recent EVs for a user (limit 3)

// ✅ NEW: Get all EVs and count for a user
exports.getEVsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM EV_Master_Data WHERE U_ID = $1`,
      [userId]
    );

    const count = result.rowCount;

    res.status(200).json({
      status: 'success',
      data: result.rows,
      count: count
    });
  } catch (error) {
    console.error('Fetch EVs by user error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch EV data' });
  }
};
exports.updateEVById = async (req, res) => {
  const { evId } = req.params;
  const fields = [
    'VUID', 'U_ID', 'Category', 'Manufacturers', 'Model', 'Purchase_Year',
    'Energy_Consumed', 'Primary_Charging_Type', 'Range',
    'Grid_Emission_Factor', 'Top_Speed', 'Charging_Time', 'Motor_Power'
  ];

  // Make an array of columns to update and their new values
  const updates = [];
  const values = [];
  let idx = 1;

  for (const field of fields) {
    if (req.body[field] !== undefined) {
      updates.push(`${field} = $${idx}`);
      values.push(req.body[field]);
      idx++;
    }
  }

  if (updates.length === 0) {
    return res.status(400).json({ status: 'error', message: 'No fields to update' });
  }

  // Add evId for WHERE clause
  values.push(evId);

  const query = `
    UPDATE EV_Master_Data
    SET ${updates.join(', ')}
    WHERE EV_ID = $${idx}
    RETURNING *
  `;

  try {
    const result = await pool.query(query, values);

    if (result.rowCount === 0) {
      return res.status(404).json({ status: 'error', message: 'EV not found' });
    }

    res.status(200).json({ status: 'success', data: result.rows[0] });
  } catch (error) {
    console.error('Update EV Error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to update EV data' });
  }
};


// evController.js
// ✅ Add this function
exports.getRecentEVsByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM EV_Master_Data WHERE U_ID = $1 ORDER BY created_at DESC LIMIT 5`,
      [userId]
    );

    res.status(200).json({
      status: 'success',
      data: result.rows
    });
  } catch (error) {
    console.error('Fetch recent EVs error:', error);
    res.status(500).json({ status: 'error', message: 'Failed to fetch recent EVs' });
  }
};

// evController.js
 