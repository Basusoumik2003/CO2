const express = require("express");
const router = express.Router();
const assetController = require("../controllers/assetController");

// Route to get statuses of assets by user
router.get("/user/:uid/status", assetController.getAssetStatusesByUser);

module.exports = router;
