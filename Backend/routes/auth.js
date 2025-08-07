// backend/routes/auth.js
const express = require('express');
const router = express.Router();

// Import controller functions
const { registerUser, loginUser, logoutUser } = require('../controllers/authController');

// Auth Routes

// POST /api/auth/signup - Register a new user
router.post('/signup', registerUser);

// POST /api/auth/login - Log in an existing user
router.post('/login', loginUser);

// POST /api/auth/logout - Log out user
router.post('/logout', logoutUser);

module.exports = router;
