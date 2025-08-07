const ImageModel = require('../models/treeImageModel');
require('dotenv').config();

exports.uploadImages = async (req, res) => {
    try {
        const files = req.files;
        if (!files || files.length === 0) {
            return res.status(400).json({ message: 'No images uploaded' });
        }

        const imageDocs = await Promise.all(
            files.map(async (file) => {
                const newImage = new ImageModel({
                    image: file.buffer.toString('base64'),
                });
                await newImage.save();

                // ✅ Build public URL (if you want to serve images later)
                return `${process.env.REACT_APP_BASE_URL}/api/image/${newImage._id}`;

            })
        );

        res.status(200).json({ message: 'Images uploaded successfully', imageUrls: imageDocs });
    } catch (error) {
        console.error('Error uploading images:', error);
        res.status(500).json({ message: 'Error uploading images' });
    }
};
