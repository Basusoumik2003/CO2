const { v4: uuidv4 } = require('uuid');
const pool = require('../config/db');

// ✅ Add Tree
exports.addTree = async (req, res) => {
  console.log('Request body:', req.body);

  const {
    UID,
    TreeName,
    BotanicalName,
    PlantingDate,
    Height,
    Location,
    imageIds,
    CreatedBy
  } = req.body;

  // ✅ Select first image if exists
  const ImageURL = Array.isArray(imageIds) && imageIds.length > 0 ? imageIds[0] : '';

  // ✅ Required fields validation
  if (!UID || !TreeName || !BotanicalName || !PlantingDate || !Location) {
    return res.status(400).json({ message: 'Please fill all required fields.' });
  }

  // ✅ Generate custom TID
  const TID = 'T' + uuidv4().slice(0, 8).toUpperCase();

  try {
    await pool.query(
      `INSERT INTO Tree_Plantation 
      (TID, UID, TreeName, BotanicalName, PlantingDate, Height, Location, ImageURL, CreatedBy) 
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)`,
      [
        TID,
        UID,
        TreeName,
        BotanicalName,
        PlantingDate,
        Height,
        Location,
        ImageURL,
        CreatedBy
      ]
    );

    res.status(200).json({ message: 'Tree added successfully', TID });
  } catch (err) {
    console.error('SQL error:', err.stack);
    res.status(500).json({ message: 'Server error while saving tree data.' });
  }
};

// ✅ Get recent trees (limit 5)
exports.getRecentTreesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      `SELECT * FROM Tree_Plantation WHERE UID = $1 ORDER BY PlantingDate DESC LIMIT 5`,
      [userId]
    );

    res.status(200).json({
      status: 'success',
      data: result.rows
    });
  } catch (error) {
    console.error('Fetch recent trees error:', error.stack);
    res.status(500).json({ status: 'error', message: 'Failed to fetch recent trees' });
  }
};

// ✅ Get all trees by user
exports.getTreesByUser = async (req, res) => {
  const { userId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM Tree_Plantation WHERE UID = $1',
      [userId]
    );

    res.status(200).json({ status: 'success', data: result.rows });
  } catch (err) {
    console.error('Error fetching trees:', err.stack);
    res.status(500).json({ status: 'error', message: 'Failed to fetch trees' });
  }
};

// ✅ Delete Tree by ID
exports.deleteTreeById = async (req, res) => {
  const { treeId } = req.params;

  try {
    // First check if the tree exists
    const checkResult = await pool.query(
      `SELECT * FROM Tree_Plantation WHERE Tree_ID = $1`,
      [treeId]
    );

    if (checkResult.rowCount === 0) {
      return res.status(404).json({ 
        status: 'error', 
        message: 'Tree not found' 
      });
    }

    // Delete the tree
    const result = await pool.query(
      `DELETE FROM Tree_Plantation WHERE Tree_ID = $1 RETURNING *`,
      [treeId]
    );

    console.log('✅ Tree deleted successfully:', result.rows[0]);

    res.status(200).json({ 
      status: 'success', 
      message: 'Tree deleted successfully',
      data: result.rows[0]
    });
  } catch (error) {
    console.error('❌ Delete Tree Error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to delete tree',
      error: error.message
    });
  }
};