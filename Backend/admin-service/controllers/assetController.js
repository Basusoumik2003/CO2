const assetService = require("../services/assetService");
const pool = require('../config/db'); // adjust the path as needed

exports.getAllAssets = async (req, res) => {
  try {
    const assets = await assetService.fetchAllAssets();
    res.status(200).json({ status: "success", data: assets });
  } catch (error) {
    console.error("❌ Error in getAllAssets:", error.stack);
    res.status(500).json({ status: "error", message: "Failed to fetch assets" });
  }
};

// Approve or update status example



exports.updateAssetStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  try {
    // Step 1: Get asset to check current status & user ID
    const result = await pool.query(
      'SELECT admin_u_id, status FROM admin_assets WHERE id = $1',
      [id]
    );

    const asset = result.rows[0];
    if (!asset) {
      return res.status(404).json({ status: 'error', message: 'Asset not found' });
    }

    const wasAlreadyApproved = asset.status === 'approved';
    const userId = asset.admin_u_id;

    // Step 2: Update asset status
    await pool.query(
      "UPDATE admin_assets SET status = $1 WHERE id = $2",
      [status, id]
    );

    // Step 3: Credit 15 tokens if approved and wasn't already approved
    if (status === 'approved' && !wasAlreadyApproved) {
      const creditResult = await pool.query(
        'SELECT * FROM credittable WHERE uid = $1',
        [userId]
      );

      if (creditResult.rows.length > 0) {
        await pool.query(
          'UPDATE credittable SET token_value = token_value + 15 WHERE uid = $1',
          [userId]
        );
      } else {
        await pool.query(
          'INSERT INTO credittable (uid, token_value) VALUES ($1, 15)',
          [userId]
        );
      }
    }

    res.status(200).json({
      status: "success",
      message: "Status updated",
    });

  } catch (error) {
    console.error("Error updating asset status:", error);
    res.status(500).json({
      status: "error",
      message: "Failed to update status",
    });
  }
};




