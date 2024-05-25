import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Home() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      setBlogs(res.data);
      // console.log(res.data)
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/blogs/${id}`)
      .then(() => {
        fetchBlogs();
      })
      .catch((error) => {
        console.log("Unable to delete post");
      });
  };

  return (
    <div className="p-5 text-center">
      <h1 className="text-center text-2xl p-6">HOME</h1>
      <div className="border-b border-black">
        {blogs.map((blog) => (
          <div key={blog._id} className="border-t border-black p-4 relative">
            <Link to={`/blogs/${blog._id}`}>
              <h4>{blog.title}</h4>
              <span>{blog.preview}</span>
            </Link>
            <div className="absolute top-1 right-9 border border-black w-[40px] rounded-full hover:bg-teal-700 hover:text-white ">
              <button
                className="font-bold"
                onClick={() => handleDelete(blog._id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
