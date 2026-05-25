<!-- Use this file to provide workspace-specific custom instructions to Copilot -->

# MERN Blog Manager Setup Checklist

## ✅ Project Created Successfully!

Your complete MERN Stack Blog Manager project has been scaffolded with:

### Frontend (React + Vite + Tailwind)

- ✅ React 18 with Vite bundler
- ✅ React Router DOM for navigation (3 pages: Home, Create, Edit)
- ✅ Tailwind CSS for styling
- ✅ Axios for API calls
- ✅ 3 reusable components (Navbar, BlogCard, BlogForm)
- ✅ Form validation and error handling
- ✅ Responsive design for all devices

### Backend (Node.js + Express + MongoDB)

- ✅ Express server with CORS enabled
- ✅ MongoDB with Mongoose
- ✅ Full CRUD REST API for blogs
- ✅ Environment variables configuration
- ✅ Error handling middleware
- ✅ Input validation

## 🚀 Quick Start Commands

### Terminal 1 - Backend Setup

```bash
cd backend
npm install
npm start
```

Backend runs at: http://localhost:5000

### Terminal 2 - Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: http://localhost:5173

## 📋 Next Steps

1. **Install MongoDB** if not already installed
2. **Install Node.js** (v16+)
3. **Run backend and frontend** using commands above
4. **Open browser** to http://localhost:5173

## 📚 Key Files

- **Backend Server:** `backend/server.js`
- **API Routes:** `backend/routes/blogRoutes.js`
- **Frontend App:** `frontend/src/App.jsx`
- **Database Models:** `backend/models/Blog.js`

## 🔗 Important URLs

- Frontend: http://localhost:5173
- Backend API: http://localhost:5000
- API Docs: http://localhost:5000/api/blogs

## ⚙️ Environment Setup

**Backend .env:**

```
MONGODB_URI=mongodb://localhost:27017/blog-manager
PORT=5000
NODE_ENV=development
```

**Frontend .env.local:**

```
VITE_API_URL=http://localhost:5000/api
```

## 🎯 Features Included

- Create, Read, Update, Delete blogs
- Search blogs by title, author, content
- Responsive mobile-friendly design
- Form validation
- Loading states
- Error handling
- Beginner-friendly code with comments

---

**Project is ready to use!** Start the servers and begin managing your blogs. 📝
