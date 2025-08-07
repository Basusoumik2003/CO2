const pool = require("../db");

// Get asset statuses by user UID
exports.getAssetStatusesByUser = async (req, res) => {
  const { uid } = req.params;

  try {
    const result = await pool.query(
      `SELECT asset_id, status 
       FROM admin_assets 
       WHERE admin_u_id = $1`,
      [uid]
    );

    // Optional: return as an object map for easier frontend usage
    const statusMap = {};
    result.rows.forEach(row => {
      statusMap[row.asset_id] = row.status;
    });

    res.status(200).json(statusMap);
  } catch (err) {
    console.error("Error fetching asset statuses:", err);
    res.status(500).json({ message: 'Failed to fetch asset statuses' });
  }
};
