import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/dbSetup.js";
import blogRoutes from "./routes/blogRoutes.js";

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// ============== MIDDLEWARE ==============

// Enable CORS - Allow requests from frontend
app.use(cors());

// Parse JSON request body
app.use(express.json());

// Parse URL-encoded request body
app.use(express.urlencoded({ extended: true }));

// ============== DATABASE CONNECTION ==============

// Connect to MongoDB
await connectDB();

// ============== ROUTES ==============

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Blog Manager API" });
});

// Blog API routes
// All blog-related endpoints start with /api/blogs
app.use("/api/blogs", blogRoutes);

// ============== ERROR HANDLING ==============

// 404 Not Found middleware
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal server error",
  });
});

// ============== SERVER STARTUP ==============

// Get port from environment variables or use default
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`📝 Blog API available at http://localhost:${PORT}/api/blogs`);
});
