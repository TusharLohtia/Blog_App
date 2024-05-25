const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Blog = require("./models/blogSchema");

// connect to express app
const app = express();

// connect to mongoDB
const dbURI = "mongodb://localhost:27017/BlogDB";
mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3001, () => {
      console.log("Server and MongoDB are connected");
    });
  })
  .catch((error) => {
    console.log("Unable to connect to Server and MongoDB:", error);
  });

//middleware
app.use(bodyParser.json());
app.use(cors());

//Routes
//GET blogs
app.get("/blogs", (req, res) => {
  const blogs = Blog.find()
    .then((blogs) => {
      res.json(blogs);
    })
    .catch((error) => {
      res.json({ message: "Unable to get blogs:", error });
    });
});

//GET blogs by ID
app.get("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const singleBlog = Blog.findById(id)
    .then((singleBlog) => {
      res.json(singleBlog);
    })
    .catch((error) => {
      res.json({ message: "Unable to get blog by ID:", error });
    });
});

//POST blog
app.post("/blogs", (req, res) => {
  const { title, preview, post } = req.body;
  const blog = new Blog({ title, preview, post });
  blog
    .save()
    .then((blog) => {
      res.json({ message: "Blog was CREATED successfully" });
    })
    .catch((error) => {
      res.json({ message: "Unable to post blog:", error });
    });
});

//UPDATE blog
app.put("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, preview, post } = req.body;
  const updatedBlog = Blog.findByIdAndUpdate(
    id,
    { title, preview, post },
    { value: true }
  )
    .then((updatedBlog) => {
      res.json({ message: "Blog was successfully UPDATED" });
    })
    .catch((error) => {
      res.json({ message: "Unable to update blog:", error });
    });
});

//DELETE blog
app.delete("/blogs/:id", (req, res) => {
  const { id } = req.params;
  const deletedBlog = Blog.findByIdAndDelete(id)
    .then((deletedBlog) => {
      res.json({ message: "Blog was successfully DELETED" });
    })
    .catch((error) => {
      res.json({ message: "Unable to delete blog:", error });
    });
});

// Create // POST
// Read // GET
// Update // PUT OR PATCH
// Delete // DELETE
