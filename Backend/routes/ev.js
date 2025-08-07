const express = require('express');
const router = express.Router();
const evController = require('../controllers/EvController');

// ✅ Create new EV entry
router.post('/', evController.createEVEntry);

// ✅ Get all EVs by user ID
router.get('/:userId', evController.getEVsByUser);

// ✅ Update EV by EV_ID
router.put('/:evId', evController.updateEVById);

// ✅ Get recent EVs for a user (limit 5)
router.get('/recent/:userId', evController.getRecentEVsByUser);

module.exports = router;
