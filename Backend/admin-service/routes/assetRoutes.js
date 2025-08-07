const express = require("express");
const router = express.Router();
const assetController = require("../controllers/assetController");
const pool = require('../config/db');


router.get("/", assetController.getAllAssets);
router.put("/:id/status", assetController.updateAssetStatus);

router.get('/pending-count', async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT COUNT(*) AS count FROM admin_assets WHERE status = 'pending';"
    );
    res.json({ count: parseInt(result.rows[0].count, 10) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
