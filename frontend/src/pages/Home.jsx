import { useEffect, useState } from "react";
import apiClient from "../apiClient";
import { Link } from "react-router-dom";
import BlogCard from "../components/BlogCard";

// Home page - Display all blogs with search functionality
export default function Home() {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Fetch blogs from API
  const fetchBlogs = async () => {
    try {
      setIsLoading(true);
      const response = await apiClient.get("/blogs");
      setBlogs(response.data);
      setFilteredBlogs(response.data);
      setError(null);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      setError("Failed to load blogs");
    } finally {
      setIsLoading(false);
    }
  };

  // Handle search
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(term) ||
        blog.author.toLowerCase().includes(term) ||
        blog.content.toLowerCase().includes(term),
    );

    setFilteredBlogs(filtered);
  };

  // Handle blog deletion
  const handleDelete = (deletedId) => {
    setBlogs((prev) => prev.filter((blog) => blog._id !== deletedId));
    setFilteredBlogs((prev) => prev.filter((blog) => blog._id !== deletedId));
  };

  return (
    <div className="min-h-screen bg-dark-900">
      

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-dark-800 to-dark-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Welcome to Blog Manager
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Create, read, and manage your blogs in one place
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <input
              type="text"
              placeholder="🔍 Search blogs by title, author, or content..."
              value={searchTerm}
              onChange={handleSearch}
              className="w-full px-6 py-3 bg-dark-800 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all duration-200"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {isLoading ? (
            // Loading State
            <div className="text-center py-12">
              <div className="inline-block">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
              </div>
              <p className="text-gray-400 mt-4">Loading blogs...</p>
            </div>
          ) : error ? (
            // Error State
            <div className="text-center py-12 bg-red-500 bg-opacity-10 border border-red-500 border-opacity-30 rounded-lg">
              <p className="text-red-400">{error}</p>
              <button
                onClick={fetchBlogs}
                className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
              >
                🔄 Retry
              </button>
            </div>
          ) : filteredBlogs.length === 0 ? (
            // Empty State
            <div className="text-center py-12">
              <p className="text-2xl text-gray-400 mb-4">
                {searchTerm ? "📭 No blogs found" : "📝 No blogs yet"}
              </p>
              <p className="text-gray-500 mb-8">
                {searchTerm
                  ? "Try a different search term"
                  : "Create your first blog to get started!"}
              </p>
              {!searchTerm && (
                <Link
                  to="/create"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-200 transform hover:scale-105"
                >
                  ✏️ Create First Blog
                </Link>
              )}
            </div>
          ) : (
            // Blog Grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBlogs.map((blog, index) => (
                <div
                  key={blog._id}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <BlogCard blog={blog} onDelete={handleDelete} />
                </div>
              ))}
            </div>
          )}

          {/* Results Count */}
          {!isLoading && filteredBlogs.length > 0 && (
            <div className="text-center mt-8 text-gray-400">
              Showing {filteredBlogs.length} of {blogs.length} blog
              {blogs.length !== 1 ? "s" : ""}
            </div>
          )}
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
