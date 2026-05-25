import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import apiClient from "../apiClient";
import Navbar from "../components/Navbar";
import BlogForm from "../components/BlogForm";

// Edit Blog page - Form to edit existing blog
export default function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch blog data on component mount
  useEffect(() => {
    fetchBlog();
  }, [id]);

  // Fetch single blog from API
  const fetchBlog = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get(`/blogs/${id}`);
      setBlog(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching blog:", error);
      setError("Failed to load blog");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle successful blog update
  const handleSubmit = (updatedBlog) => {
    // Navigate to home page after successful update
    navigate("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-dark-900">
        
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <div className="inline-block">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
            </div>
            <p className="text-gray-400 mt-4">Loading blog...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen bg-dark-900">
       
        <div className="flex items-center justify-center h-screen">
          <div className="text-center bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 rounded-lg p-8">
            <p className="text-red-400 text-lg mb-4">
              {error || "Blog not found"}
            </p>
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
            >
              🏠 Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-900">
     

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            ✏️ Edit Blog
          </h1>
          <p className="text-blue-100 text-lg">Update your blog content</p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <BlogForm blog={blog} onSubmit={handleSubmit} isEditing={true} />
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
