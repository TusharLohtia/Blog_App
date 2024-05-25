import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import BlogProfile from "./pages/BlogProfile";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createblog" element={<CreateBlog />} />
        <Route path="/blogs/:id" element={<BlogProfile />} />
      </Routes>
    </div>
  );
}

export default App;
