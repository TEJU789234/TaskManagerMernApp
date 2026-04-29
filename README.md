# Task Manager – MERN Stack Application

A full-stack Task Management System built using the MERN stack (MongoDB, Express.js, React.js, Node.js). This application allows users to efficiently manage tasks with authentication, role-based access control, and a clean user interface.

---

## 📌 Overview

This system helps individuals and organizations:

- Create and manage tasks
- Track task status and priorities
- Assign tasks to users (admin feature)
- Ensure secure access using authentication
- Maintain proper ownership and authorization

---

## 🚀 Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Joi Validation
- RBAC (Role-Based Access Control)

### Frontend

- React.js (Vite)
- React Router DOM
- Axios
- Bootstrap

---

## 📂 Project Structure

```
task-manager/
│
├── backend/
│   ├── config/
│   ├── src/
│   │   ├── models/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middlewares/
│   │   ├── validators/
│   │   ├── app.js
│   │   └── server.js
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   ├── routes/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
└── README.md
```

---

## 🔐 Features

### Authentication

- User Registration
- User Login
- JWT-based authentication
- Persistent login (localStorage)

### Authorization

- Role-based access:
  - **User**
  - **Admin**

- Admin-only routes for user management
- Ownership checks for tasks

### Tasks Management

- Create Task
- View Tasks (paginated)
- Update Task
- Delete Task
- Filter (status, priority)
- Sort (createdAt, dueDate, priority)

### Admin Features

- Manage users (CRUD)
- Assign tasks to any user
- View all tasks across users

---

## ⚙️ Backend Setup

### 1. Navigate to backend

```
cd backend
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variables

Create `.env` file:

```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=30d
```

### 4. Run backend

```
npm run dev
```

Server will start at:

```
http://localhost:5000
```

---

## 💻 Frontend Setup

### 1. Navigate to frontend

```
cd frontend
```

### 2. Install dependencies

```
npm install
```

### 3. Configure environment variable

Create `.env` file:

```
VITE_API_BASE_URL=http://localhost:5000
```

### 4. Run frontend

```
npm run dev
```

App will run at:

```
http://localhost:5173
```

---

## 🔄 API Endpoints Overview

### Auth (Public)

- `POST /auth/register`
- `POST /auth/login`

### Users (Admin Only)

- `GET /users`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

### Tasks (Protected)

- `GET /tasks`
- `POST /tasks`
- `GET /tasks/:id`
- `PUT /tasks/:id`
- `DELETE /tasks/:id`

---

## 🧪 Testing

Use Postman or any API tool to test:

- Register → Login → Get Token
- Use token in headers:

```
Authorization: Bearer <TOKEN>
```

---

## 🎯 Key Concepts Implemented

- RESTful API design
- JWT Authentication
- Middleware architecture
- Input validation using Joi
- Pagination, filtering, and sorting
- Role-based authorization
- Ownership-based access control
- Modular scalable folder structure

---

## ✨ Future Enhancements

- Toast notifications and alerts
- File attachments in tasks
- Email reminders for due dates
- Dashboard analytics
- Deployment using Docker + Cloud

---

## 📜 License

This project is for educational and demonstration purposes.

---

## 👩‍💻 Author

Task Manager MERN Project
Developed as part of full-stack training and implementation practice.
