# 🧠 TaskFlow – Scalable Team Task Management System

TaskFlow is a full-stack task management system designed for scalable team collaboration. It supports user authentication, team-based task assignment, role-based access control (RBAC), deadlines, and commenting — making it a great foundation for real-world project and productivity tools.

---

## 🚀 Features

- ✅ **User Authentication** using JWT + Bcrypt
- ✅ **Role-Based Access Control (RBAC)**: Admin, Manager, Member
- ✅ **Teams & Nested Tasks** with deadlines and comments
- ✅ **RESTful API** built with Node.js, Express.js & MongoDB
- ✅ **Frontend** built with React.js + TypeScript
- ✅ **CI/CD** deployment with GitHub + Render

---

## 🛠️ Tech Stack

| Layer     | Tech                                    |
|-----------|------------------------------------------|
| Frontend  | React.js, TypeScript, Axios, React Router |
| Backend   | Node.js, Express.js, TypeScript, JWT, Bcrypt |
| Database  | MongoDB + Mongoose                      |
| Dev Tools | Git, VS Code, GitHub, Render            |

---

## 📂 Project Structure

```bash
project-root/
├── taskflow-backend/       # Backend code
│   ├── src/
│   │   ├── config/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── ...
│   ├── server.ts
│   ├── seed-user.ts
│   └── .env
│
├── taskflow-frontend/      # Frontend code
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   └── ...
│   └── public/
