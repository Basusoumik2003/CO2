// const express = require('express');
// const router = express.Router();
// const blogController = require('../controllers/blogController');
// const upload = require('../middlewares/upload');

// // CREATE Blog (with media upload)
// router.post(
//   '/',
//   upload.fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'video', maxCount: 1 }
//   ]),
//   blogController.createBlog
// );

// // GET all blogs
// router.get('/', blogController.getAllBlogs);

// // GET single blog by ID
// router.get('/:id', blogController.getBlogById);

// // UPDATE blog by ID (optional media update)
// router.put(
//   '/:id',
//   upload.fields([
//     { name: 'image', maxCount: 1 },
//     { name: 'video', maxCount: 1 }
//   ]),
//   blogController.updateBlog
// );

// // DELETE blog by ID
// router.delete('/:id', blogController.deleteBlog);

// module.exports = router;



const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const multer = require('multer');

// Multer setup for file uploads (image & video)
const storage = multer.memoryStorage();
const upload = multer({ storage: multer.memoryStorage() });

// ---------------- ROUTES ------------------

// 📌 Create a blog post with image/video
router.post(
  '/',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 },
  ]),
  blogController.createBlog
);

// 🔄 Update a blog post
router.put(
  '/:id',
  upload.fields([
    { name: 'image', maxCount: 1 },
    { name: 'video', maxCount: 1 },
  ]),
  blogController.updateBlog
);

// 📋 Get all blogs
router.get('/', blogController.getAllBlogs);

// 🔍 Get a single blog by ID
router.get('/:id', blogController.getBlogById);

// ❌ Delete a blog by ID
router.delete('/:id', blogController.deleteBlog);

// ❤️ Like a blog
router.patch('/:id/like', blogController.likeBlog);

// 💬 Add a comment to a blog
router.post('/:id/comments', blogController.addComment);

module.exports = router;
