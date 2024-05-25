import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import UpdateForm from "../components/UpdateForm";

function BlogProfile() {
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get(`http://localhost:3001/blogs/${id}`).then((res) => {
      setBlog(res.data);
      console.log(res.data);
    });
  };

  const handleUpdateClick = () => {
    setSelectedBlog(blog);
  };

  const handleUpdateDone = () => {
    setSelectedBlog(null);
    fetchBlogs(); // Fetch updated data after update
  };

  return (
    <div className="text-center p-6">
      <h3 className="text-2xl p-4">BLOG PROFILE</h3>
      <div className="relative">
        {selectedBlog === blog && (
          <UpdateForm
            id={id}
            InitialTitle={blog.title}
            InitialPreview={blog.preview}
            InitialPost={blog.post}
            onUpdate={handleUpdateDone}
          />
        )}
        <h4 className="text-xl p-5">Title: {blog.title}</h4>
        <br />
        <br />
        <span>Preview: {blog.preview}</span>
        <br />
        <br />
        <span className="p-4">Created: {blog.createdAt}</span>
        <br />
        <br />
        <p className="text-sm">{blog.post}</p>
        <div>
          <button
            className="absolute top-0 left-0 w-[130px] h-[50px] border border-black hover:bg-teal-700 hover:text-white"
            onClick={handleUpdateClick}
          >
            Update Blog
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlogProfile;
