// const mongoose = require("mongoose");

// const blogSchema = new mongoose.Schema({
//   title: String,
//   content: String,
//   author: String,
//   tags: [String],
//   imageUrl: String, // IPFS image URL
//   videoUrl: String, // IPFS video URL
//   createdAt: { type: Date, default: Date.now },
// });

// module.exports = mongoose.model("Blog", blogSchema);



const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    default: '',
  },
  author: {
    name: { type: String, required: true },
    avatar: { type: String }, // avatar URL
    bio: { type: String },
  },
  tags: [String], // e.g. ["eco", "solar", "green"]
  categories: [String], // e.g. ["Green Tips", "Solar", "EV"]
  imageUrl: String, // IPFS-hosted blog image
  videoUrl: String, // Optional video content
  comments: [
    {
      user: String,
      text: String,
      createdAt: { type: Date, default: Date.now },
    },
  ],
  likes: {
    type: Number,
    default: 0,
  },
  ecoBadge: {
    type: String, // e.g., "Tree Saver", "Green Commuter"
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Blog", blogSchema);

