import express from "express";
import {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController.js";

// Create Express router
const router = express.Router();

// Route: GET all blogs
// Endpoint: /api/blogs
router.get("/", getAllBlogs);

// Route: GET single blog by ID
// Endpoint: /api/blogs/:id
router.get("/:id", getBlogById);

// Route: CREATE new blog
// Endpoint: /api/blogs
// Body: { title, content, author }
router.post("/", createBlog);

// Route: UPDATE blog by ID
// Endpoint: /api/blogs/:id
// Body: { title, content, author }
router.put("/:id", updateBlog);

// Route: DELETE blog by ID
// Endpoint: /api/blogs/:id
router.delete("/:id", deleteBlog);

export default router;
