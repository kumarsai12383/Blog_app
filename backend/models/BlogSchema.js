import mongoose from "mongoose";

// MongoDB Blog Schema
const blogSchema = new mongoose.Schema(
  {
    // Blog title (required)
    title: {
      type: String,
      required: [true, "Please provide a title"],
      trim: true,
      maxlength: 200,
    },

    // Blog content (required)
    content: {
      type: String,
      required: [true, "Please provide content"],
    },

    // Author name (required)
    author: {
      type: String,
      required: [true, "Please provide author name"],
      trim: true,
    },
  },
  {
    // Automatically add createdAt and updatedAt timestamps
    timestamps: true,
  },
);

// Create and export Blog model
const Blog = mongoose.model("Blog", blogSchema);
export default Blog;
