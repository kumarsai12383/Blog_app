import { Link } from "react-router-dom";
import apiClient from "../apiClient";
import { useState } from "react";

// BlogCard component - Individual blog card with edit/delete options
export default function BlogCard({ blog, onDelete, onUpdate }) {
  const [isDeleting, setIsDeleting] = useState(false);

  // Handle delete blog
  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this blog?")) {
      try {
        setIsDeleting(true);
        await apiClient.delete(`/blogs/${blog._id}`);
        onDelete(blog._id);
        alert("Blog deleted successfully!");
      } catch (error) {
        console.error("Error deleting blog:", error);
        alert("Failed to delete blog");
      } finally {
        setIsDeleting(false);
      }
    }
  };

  // Format date to readable format
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="bg-dark-800 bg-opacity-50 backdrop-blur-md border border-dark-700 rounded-lg p-6 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 transform hover:scale-105 group">
      {/* Blog Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
            {blog.title}
          </h3>
          <p className="text-sm text-gray-400 mt-1">by {blog.author}</p>
        </div>
      </div>

      {/* Blog Content Preview */}
      <p className="text-gray-300 text-sm mb-4 line-clamp-3 group-hover:text-gray-200 transition-colors duration-200">
        {blog.content}
      </p>

      {/* Blog Meta Info */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-dark-700">
        <span className="text-xs text-gray-500">
          {formatDate(blog.createdAt)}
        </span>
        <span className="text-xs px-2 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded-full">
          Blog
        </span>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <Link
          to={`/edit/${blog._id}`}
          className="flex-1 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-200 transform hover:scale-105 text-center text-sm font-medium"
        >
          ✏️ Edit
        </Link>
        <button
          onClick={handleDelete}
          disabled={isDeleting}
          className="flex-1 py-2 px-3 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-lg transition-all duration-200 transform hover:scale-105 text-sm font-medium disabled:cursor-not-allowed"
        >
          {isDeleting ? "⏳ Deleting..." : "🗑️ Delete"}
        </button>
      </div>
    </div>
  );
}
