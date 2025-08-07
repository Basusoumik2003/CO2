const express = require('express');
const multer = require('multer');
const { uploadImages } = require('../controllers/imageController');

const router = express.Router();

const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post('/upload', upload.array('images', 5), uploadImages);

module.exports = router;
