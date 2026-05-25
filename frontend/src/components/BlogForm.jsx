import { useState, useEffect } from "react";
import apiClient from "../apiClient";

// BlogForm component - Reusable form for creating and editing blogs
export default function BlogForm({ blog, onSubmit, isEditing = false }) {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    author: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Pre-fill form if editing
  useEffect(() => {
    if (isEditing && blog) {
      setFormData({
        title: blog.title,
        content: blog.content,
        author: blog.author,
      });
    }
  }, [blog, isEditing]);

  // Validate form data
  const validateForm = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = "Title is required";
    if (!formData.content.trim()) newErrors.content = "Content is required";
    if (!formData.author.trim()) newErrors.author = "Author is required";
    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      setIsSubmitting(true);
      let response;

      if (isEditing) {
        // Update existing blog
        response = await apiClient.put(`/blogs/${blog._id}`, formData);
      } else {
        // Create new blog
        response = await apiClient.post("/blogs", formData);
      }

      // Call parent component callback
      onSubmit(response.data);
      alert(
        isEditing ? "Blog updated successfully!" : "Blog created successfully!",
      );
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit blog. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-dark-800 bg-opacity-50 backdrop-blur-md border border-dark-700 rounded-lg p-8 max-w-2xl mx-auto"
    >
      {/* Title Field */}
      <div className="mb-6">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Blog Title
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Enter blog title"
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all duration-200"
        />
        {errors.title && (
          <p className="text-red-500 text-sm mt-2">{errors.title}</p>
        )}
      </div>

      {/* Author Field */}
      <div className="mb-6">
        <label
          htmlFor="author"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Author Name
        </label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Enter your name"
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 transition-all duration-200"
        />
        {errors.author && (
          <p className="text-red-500 text-sm mt-2">{errors.author}</p>
        )}
      </div>

      {/* Content Field */}
      <div className="mb-6">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Blog Content
        </label>
        <textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Enter your blog content"
          rows="8"
          className="w-full px-4 py-3 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 resize-none transition-all duration-200"
        ></textarea>
        {errors.content && (
          <p className="text-red-500 text-sm mt-2">{errors.content}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-purple-500/50 disabled:bg-gray-600 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105"
      >
        {isSubmitting
          ? "⏳ Submitting..."
          : isEditing
            ? "✏️ Update Blog"
            : "📝 Create Blog"}
      </button>
    </form>
  );
}
