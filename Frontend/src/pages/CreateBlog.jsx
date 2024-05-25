import React, { useState, useEffect } from "react";
import axios from "axios";

function CreateBlog() {
  const [title, setTitle] = useState("");
  const [preview, setPreview] = useState("");
  const [post, setPost] = useState("");

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      // console.log(res.data)
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/blogs", { title, preview, post })
      .then(() => {
        setTitle("");
        setPreview("");
        setPost("");
        fetchBlogs();
      })
      .catch((error) => {
        // console.log('Unable to post blog')
      });
  };

  return (
    <div className="p-5 text-center">
      <h1 className="text-center text-2xl p-4">CREATE A BLOG</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {/* Title Input */}
          <label>Title: </label>
          <br />
          <input
            className="w-[400px] h-[30px] border border-black rounded-xl p-2 bg-zinc-300"
            type="text"
            placeholder="Enter Title Here"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <br />
          {/* Preview Input */}
          <label>Preview: </label>
          <br />
          <input
            className="w-[400px] h-[30px] border border-black rounded-xl p-2 bg-zinc-300"
            type="text"
            placeholder="Enter Preview Here"
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
          />
          <br />
          <br />
          {/* Post Input */}
          <label>Post:</label>
          <br />
          <textarea
            className="w-[650px] h-[400px] border border-black rounded-xl bg-zinc-300 p-2"
            placeholder="Enter Your Thoughts Here..."
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          <br />
          <br />
          {/* Button */}
          <button
            className="w-[300px] h-[50px] border border-black hover:bg-teal-700 hover:text-white"
            type="submit"
          >
            Submit Blog!
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBlog;
