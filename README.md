# MERN Blog Manager

A complete full-stack blog management application built with React, Node.js, Express, and MongoDB.

## 📁 Project Structure

```
blog-manager/
├── frontend/                 # React + Vite frontend
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Home.jsx     # Display all blogs with search
│   │   │   ├── CreateBlog.jsx # Create new blog form
│   │   │   └── EditBlog.jsx  # Edit existing blog form
│   │   ├── components/
│   │   │   ├── Navbar.jsx    # Navigation bar
│   │   │   ├── BlogCard.jsx  # Blog card component
│   │   │   └── BlogForm.jsx  # Reusable blog form
│   │   ├── App.jsx           # Main app component with routing
│   │   ├── main.jsx          # React entry point
│   │   ├── index.css         # Global styles
│   │   └── apiClient.js      # Axios API configuration
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── index.html
│
└── backend/                  # Node.js + Express backend
    ├── models/
    │   └── BlogSchema.js          # MongoDB Blog schema
    ├── routes/
    │   └── blogRoutes.js    # API routes for blogs
    ├── controllers/
    │   └── blogController.js # Business logic for blogs
    ├── config/
    │   └── db.js            # MongoDB connection setup
    ├── server.js            # Express server setup
    ├── package.json
    └── .env                 # Environment variables
```

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
- **MongoDB** - [Download Community Edition](https://www.mongodb.com/try/download/community)
- **Git** - [Download](https://git-scm.com/)

### Backend Setup

1. **Navigate to backend folder:**

   ```bash
   cd backend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure MongoDB:**
   - Make sure MongoDB is running on your system
   - Update `.env` file if using a different MongoDB URI:
     ```
     MONGODB_URI=mongodb://localhost:27017/blog-manager
     PORT=5000
     ```

4. **Start backend server:**
   ```bash
   npm start
   ```

   - Or for development with auto-reload:
   ```bash
   npm run dev
   ```

   - Server will run at `http://localhost:5000`

### Frontend Setup

1. **Open new terminal and navigate to frontend folder:**

   ```bash
   cd frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Configure API endpoint (if needed):**
   - Update `.env.local` if backend is on different port:
     ```
     VITE_API_URL=http://localhost:5000/api
     ```

4. **Start frontend development server:**
   ```bash
   npm run dev
   ```

   - Frontend will run at `http://localhost:5173`

## 🎨 Features

### Frontend

- ✅ **Responsive Design** - Works on mobile, tablet, and desktop
- ✅ **Home Page** - View all blogs with search functionality
- ✅ **Create Blog** - Add new blog with title, content, and author
- ✅ **Edit Blog** - Update existing blog content
- ✅ **Delete Blog** - Remove blogs with confirmation
- ✅ **Modern UI** - Tailwind CSS with smooth animations
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Loading States** - Visual feedback during API calls

### Backend

- ✅ **REST API** - Full CRUD operations
- ✅ **MongoDB** - NoSQL database for blog storage
- ✅ **CORS Enabled** - Allow cross-origin requests from frontend
- ✅ **Error Handling** - Proper error responses
- ✅ **Validation** - Input validation on server side

## 📡 API Endpoints

All endpoints start with `/api/blogs`

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | `/api/blogs`     | Get all blogs   |
| GET    | `/api/blogs/:id` | Get single blog |
| POST   | `/api/blogs`     | Create new blog |
| PUT    | `/api/blogs/:id` | Update blog     |
| DELETE | `/api/blogs/:id` | Delete blog     |

### Example Requests

**Create Blog:**

```bash
POST /api/blogs
Content-Type: application/json

{
  "title": "My First Blog",
  "content": "This is the blog content...",
  "author": "John Doe"
}
```

**Update Blog:**

```bash
PUT /api/blogs/123456
Content-Type: application/json

{
  "title": "Updated Title",
  "content": "Updated content...",
  "author": "John Doe"
}
```

**Delete Blog:**

```bash
DELETE /api/blogs/123456
```

## 📊 MongoDB Blog Schema

```javascript
{
  _id: ObjectId,
  title: String (required),
  content: String (required),
  author: String (required),
  createdAt: Date (auto-generated),
  updatedAt: Date (auto-generated)
}
```

## 🛠 Technologies Used

### Frontend

- **React 18** - UI library
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router DOM v6** - Client-side routing
- **Axios** - HTTP client for API calls

### Backend

- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-Origin Resource Sharing
- **dotenv** - Environment variables management

## 📝 Environment Variables

### Backend (.env)

```
MONGODB_URI=mongodb://localhost:27017/blog-manager
PORT=5000
NODE_ENV=development
```

### Frontend (.env.local)

```
VITE_API_URL=http://localhost:5000/api
```

## 🔍 Troubleshooting

### MongoDB Connection Error

- **Issue:** `MongoServerError: connect ECONNREFUSED`
- **Solution:** Make sure MongoDB is running on your system
  ```bash
  # Windows: Start MongoDB service
  # macOS: brew services start mongodb-community
  # Linux: sudo systemctl start mongod
  ```

### CORS Error

- **Issue:** `Access to XMLHttpRequest blocked by CORS policy`
- **Solution:** Backend already has CORS enabled. Check if backend URL in `.env.local` is correct.

### Port Already in Use

- **Issue:** `Error: listen EADDRINUSE: address already in use`
- **Solution:** Change PORT in backend `.env` or kill the process using that port
  ```bash
  # Windows: netstat -ano | findstr :5000
  # macOS/Linux: lsof -i :5000
  ```

### API Calls Return 404

- **Issue:** `GET /api/blogs - 404 Not Found`
- **Solution:** Make sure backend server is running and routes are properly set up

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Axios Documentation](https://axios-http.com)

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 Author

Created as a beginner-friendly MERN stack project for learning and practice.

---

**Happy Coding! 🎉**

If you have any questions or run into issues, please check the troubleshooting section above.
