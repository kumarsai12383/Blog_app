import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import Navbar from "./components/Navbar";
import EditBlog from "./pages/EditBlog";

// Main App component - Setup routing and pages
export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home page - Display all blogs */}
        <Route path="/" element={<Home />} />

        {/* Create blog page */}
        <Route path="/create" element={<CreateBlog />} />

        {/* Edit blog page */}
        <Route path="/edit/:id" element={<EditBlog />} />
      </Routes>
    </Router>
  );
}
