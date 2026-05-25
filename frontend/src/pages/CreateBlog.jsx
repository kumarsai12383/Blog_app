import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import BlogForm from "../components/BlogForm";

// Create Blog page - Form to create new blog
export default function CreateBlog() {
  const navigate = useNavigate();

  // Handle successful blog creation
  const handleSubmit = (newBlog) => {
    // Navigate to home page after successful creation
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-dark-900">
     

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ✏️ Create New Blog
          </h1>
          <p className="text-blue-100 text-lg">
            Share your thoughts with the world
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BlogForm onSubmit={handleSubmit} />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-800 border-t border-dark-700 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Blog Manager. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
