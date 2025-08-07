const pool = require("../config/db");

exports.fetchAllAssets = async () => {
  const result = await pool.query(`
    SELECT 
      a.*,
      CONCAT(u.first_name, ' ', u.last_name) AS owner,
      ad.area
    FROM admin_assets a
    LEFT JOIN users u ON a.admin_u_id = u.u_id
    LEFT JOIN addresses ad ON ad.pro_id = u.pro_id
    ORDER BY a.created_at DESC
  `);

  return result.rows;
};

exports.updateStatus = async (asset_id, status) => {
  await pool.query(
    `UPDATE admin_assets SET status = $1 WHERE asset_id = $2`,
    [status, asset_id]
  );
};
