const express = require('express');
const router = express.Router();
const {
  createSolarEntry,
  getSolarPanelsByUser,
  getRecentSolarPanelsByUser, // ✅ ye new function import karo
  deleteSolarPanelById
} = require('../controllers/solarController');

// ✅ Add routes
router.post('/', createSolarEntry); // POST /api/solarpanel
router.get('/:userId', getSolarPanelsByUser); // GET /api/solarpanel/:userId

// ✅ New route for recent panels
router.get('/recent/:userId', getRecentSolarPanelsByUser); // GET /api/solarpanel/recent/:userId

// ✅ Delete solar panel by ID
router.delete('/:solarId', deleteSolarPanelById); // DELETE /api/solarpanel/:solarId

module.exports = router;