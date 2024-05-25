import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between border-b border-cyan-950  p-6 items-center ">
      <Link to="/">
        <h2 className="text-3xl font-bold text-orange-600">tusharBlog</h2>
      </Link>
      <ul className="flex gap-7 ">
        <Link to="/createblog">
          <li>Create a Blog</li>
        </Link>
        <li>Features</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
