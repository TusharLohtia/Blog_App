import React, { useState, useEffect } from "react";
import axios from "axios";

function UpdateForm({
  id,
  InitialTitle,
  InitialPreview,
  InitialPost,
  onUpdate,
}) {
  const [blogs, setBlogs] = useState([]);
  const [title, setTitle] = useState(InitialTitle);
  const [preview, setPreview] = useState(InitialPreview);
  const [post, setPost] = useState(InitialPost);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axios.get("http://localhost:3001/blogs").then((res) => {
      setBlogs(res.data);
      console.log(res.data);
    });
  };

  const handleUpdate = () => {
    axios
      .put(`http://localhost:3001/blogs/${id}`, { title, preview, post })
      .then(() => {
        onUpdate();
      })
      .catch((error) => {
        console.log("Unable to update blog");
      });
  };

  return (
    <div>
      {/* title */}
      <input
        className="w-[400px] h-[30px] border border-black rounded-xl p-2 bg-zinc-300"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* Preview */}
      <br />
      <br />

      <input
        className="w-[400px] h-[30px] border border-black rounded-xl p-2 bg-zinc-300"
        type="text"
        value={preview}
        onChange={(e) => setPreview(e.target.value)}
      />
      <br />
      <br />

      {/* Text Area */}
      <textarea
        className="w-[650px] h-[400px] border border-black rounded-xl bg-zinc-300 p-2"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <br />
      <br />
      {/* Button */}
      <button
        className="w-[300px] h-[50px] border border-black hover:bg-teal-700 hover:text-white"
        onClick={handleUpdate}
      >
        Submit Blog!
      </button>
    </div>
  );
}

export default UpdateForm;
