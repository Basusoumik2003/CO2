const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
    image: { type: String, required: true }, // base64 string or URL
});

module.exports = mongoose.model('Image', imageSchema);
