const multer = require('multer');

const storage = multer.memoryStorage(); // using buffer for IPFS upload

const upload = multer({ storage });

module.exports = upload;
