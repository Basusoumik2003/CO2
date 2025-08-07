// const Blog = require('../models/blog');
// const pinToIPFS = require('../utils/ipfsUpload');

// // 📌 Create a new blog
// exports.createBlog = async (req, res) => {
//   try {
//     const { title, content, author, tags } = req.body;

//     if (!title || !content || !author) {
//       return res.status(400).json({ error: 'Title, content, and author are required.' });
//     }

//     let imageUrl = null;
//     let videoUrl = null;

//     if (req.files?.image?.[0]) {
//       imageUrl = await pinToIPFS(req.files.image[0].buffer, req.files.image[0].originalname);
//     }

//     if (req.files?.video?.[0]) {
//       videoUrl = await pinToIPFS(req.files.video[0].buffer, req.files.video[0].originalname);
//     }

//     const formattedTags = tags
//       ? tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
//       : [];

//     const blog = new Blog({
//       title: title.trim(),
//       content: content.trim(),
//       author: author.trim(),
//       tags: formattedTags,
//       imageUrl,
//       videoUrl,
//     });

//     const saved = await blog.save();
//     res.status(201).json({
//       success: true,
//       message: 'Blog created successfully',
//       blog: saved,
//     });

//   } catch (error) {
//     console.error('Error uploading to IPFS:', error.message);
//     res.status(500).json({ error: 'Blog creation failed' });
//   }
// };

// // 🔄 Update existing blog by ID
// exports.updateBlog = async (req, res) => {
//   try {
//     const { title, content, author, tags } = req.body;
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) return res.status(404).json({ error: "Blog not found" });

//     blog.title = title?.trim() || blog.title;
//     blog.content = content?.trim() || blog.content;
//     blog.author = author?.trim() || blog.author;
//     blog.tags = tags
//       ? tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
//       : blog.tags;

//     if (req.files?.image?.[0]) {
//       const imageUrl = await pinToIPFS(req.files.image[0].buffer, req.files.image[0].originalname);
//       blog.imageUrl = imageUrl;
//     }

//     if (req.files?.video?.[0]) {
//       const videoUrl = await pinToIPFS(req.files.video[0].buffer, req.files.video[0].originalname);
//       blog.videoUrl = videoUrl;
//     }

//     const updatedBlog = await blog.save();
//     res.json({
//       success: true,
//       message: 'Blog updated successfully',
//       blog: updatedBlog,
//     });

//   } catch (error) {
//     console.error('Blog update failed:', error.message);
//     res.status(500).json({ error: 'Blog update failed' });
//   }
// };

// // 📋 Get all blogs
// exports.getAllBlogs = async (req, res) => {
//   try {
//     const blogs = await Blog.find().sort({ createdAt: -1 }); // latest first
//     res.json({
//       success: true,
//       count: blogs.length,
//       blogs,
//     });
//   } catch (error) {
//     console.error('Error fetching blogs:', error.message);
//     res.status(500).json({ error: 'Failed to fetch blogs' });
//   }
// };

// // 🔍 Get a blog by ID
// exports.getBlogById = async (req, res) => {
//   try {
//     const blog = await Blog.findById(req.params.id);
//     if (!blog) return res.status(404).json({ error: 'Blog not found' });

//     res.json({
//       success: true,
//       blog,
//     });
//   } catch (error) {
//     console.error('Error fetching blog by ID:', error.message);
//     res.status(500).json({ error: 'Failed to fetch blog' });
//   }
// };

// // ❌ Delete a blog
// exports.deleteBlog = async (req, res) => {
//   try {
//     const blog = await Blog.findByIdAndDelete(req.params.id);
//     if (!blog) return res.status(404).json({ error: 'Blog not found' });

//     res.json({
//       success: true,
//       message: 'Blog deleted successfully',
//     });
//   } catch (error) {
//     console.error('Error deleting blog:', error.message);
//     res.status(500).json({ error: 'Failed to delete blog' });
//   }
// };


const Blog = require('../models/blog');
const pinToIPFS = require('../utils/ipfsUpload');

// 📌 Create a new blog
exports.createBlog = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const authorName = req.body.authorName;
    const authorAvatar = req.body.authorAvatar || null;
    const authorBio = req.body.authorBio || null;

    if (!title || !content || !authorName) {
      return res.status(400).json({ error: 'Title, content, and author name are required.' });
    }

    let imageUrl = null;
    let videoUrl = null;

    if (req.files?.image?.[0]) {
      console.log("Image received:", req.files.image[0].originalname);
      imageUrl = await pinToIPFS(req.files.image[0].buffer, req.files.image[0].originalname);
    }

    if (req.files?.video?.[0]) {
      videoUrl = await pinToIPFS(req.files.video[0].buffer, req.files.video[0].originalname);
    }

    const formattedTags = tags
      ? tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
      : [];

    const blog = new Blog({
      title: title.trim(),
      content: content.trim(),
      author: {
        name: authorName.trim(),
        avatar: authorAvatar,
        bio: authorBio,
      },
      tags: formattedTags,
      imageUrl,
      videoUrl,
      likes: 0,
      comments: [],
    });

    const saved = await blog.save();
    res.status(201).json({
      success: true,
      message: 'Blog created successfully',
      blog: saved,
    });

  } catch (error) {
    console.error('Blog creation failed:', error.message);
    res.status(500).json({ error: 'Blog creation failed' });
  }
};



// 🔄 Update existing blog by ID
exports.updateBlog = async (req, res) => {
  try {
    const { title, content, author, tags } = req.body;
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: "Blog not found" });

    blog.title = title?.trim() || blog.title;
    blog.content = content?.trim() || blog.content;
    blog.author = author?.trim() || blog.author;
    blog.tags = tags
      ? tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
      : blog.tags;

    if (req.files?.image?.[0]) {
      const imageUrl = await pinToIPFS(req.files.image[0].buffer, req.files.image[0].originalname);
      blog.imageUrl = imageUrl;
    }

    if (req.files?.video?.[0]) {
      const videoUrl = await pinToIPFS(req.files.video[0].buffer, req.files.video[0].originalname);
      blog.videoUrl = videoUrl;
    }

    const updatedBlog = await blog.save();
    res.json({
      success: true,
      message: 'Blog updated successfully',
      blog: updatedBlog,
    });

  } catch (error) {
    console.error('Blog update failed:', error.message);
    res.status(500).json({ error: 'Blog update failed' });
  }
};

// 📋 Get all blogs
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 }); // latest first
    res.json({
      success: true,
      count: blogs.length,
      blogs,
    });
  } catch (error) {
    console.error('Error fetching blogs:', error.message);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
};

// 🔍 Get a blog by ID
exports.getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    res.json({
      success: true,
      blog,
    });
  } catch (error) {
    console.error('Error fetching blog by ID:', error.message);
    res.status(500).json({ error: 'Failed to fetch blog' });
  }
};

// ❌ Delete a blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    res.json({
      success: true,
      message: 'Blog deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting blog:', error.message);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
};

// ❤️ Like a blog
exports.likeBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    blog.likes += 1;
    const updated = await blog.save();

    res.json({
      success: true,
      message: 'Blog liked',
      likes: updated.likes,
    });
  } catch (error) {
    console.error('Error liking blog:', error.message);
    res.status(500).json({ error: 'Failed to like blog' });
  }
};

// 💬 Add a comment
exports.addComment = async (req, res) => {
  try {
    const { user, text } = req.body;

    if (!user || !text) {
      return res.status(400).json({ error: 'Username and comment text are required.' });
    }

    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    blog.comments.push({
      user: user.trim(),
      text: text.trim(),
      createdAt: new Date(), // ✅ Match schema field name
    });

    const updated = await blog.save();

    res.status(201).json({
      success: true,
      message: 'Comment added',
      comments: updated.comments,
    });

  } catch (error) {
    console.error('Error adding comment:', error.message);
    res.status(500).json({ error: 'Failed to add comment' });
  }
};

