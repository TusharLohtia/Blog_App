const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  title: String,
  preview: String,
  post: String,
  createdAt: { type: Date, default: Date.now },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
