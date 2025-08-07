const express = require('express');
const router = express.Router();
const treeController = require('../controllers/treeController');

router.post('/', treeController.addTree);
router.get('/recent/:userId', treeController.getRecentTreesByUser);
router.get('/:userId', treeController.getTreesByUser);

// ✅ Delete tree by ID
router.delete('/:treeId', treeController.deleteTreeById);

module.exports = router;