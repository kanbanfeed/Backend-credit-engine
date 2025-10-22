# Backend-Credit-Engine

A full-stack credit management system that allows tracking of user transactions, credits issued, and user management. The project is built with **Node.js, Express, SQLite** for the backend and **React + Vite + Tailwind CSS** for the frontend.

---

## 🚀 Features

- Manage transactions with amount and credits
- View recent users and statistics
- Fully responsive frontend dashboard
- REST API endpoints for backend operations
- Deployed live for testing and demo

---

## 🛠 Tech Stack

**Backend:**
- Node.js
- Express
- SQLite3
- Cors
- Body-parser
- Dotenv
- Nodemon (dev)

**Frontend:**
- React.js
- Vite
- TailwindCSS
- Heroicons

---

## 📦 Project Structure

```

Backend-Credit-Engine/
├── backend/             # Node.js backend
│   ├── src/
│   │   └── app.js
│   ├── package.json
│   └── .env
├── frontend/            # React frontend
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
└── README.md

````

---

## ⚡ Live Demo

- Backend API: [https://backend-credit-engine.onrender.com](https://backend-credit-engine.onrender.com) *(dummy link)*  
- Frontend: [https://frontend-credit-engine.onrender.com](https://frontend-credit-engine.onrender.com) *(dummy link)*

---

## 📌 API Endpoints

**Base URL:** `https://backend-credit-engine.onrender.com/api`

### Transactions

- **GET** `/transactions`  
  Get all transactions.

- **POST** `/transactions`  
  Add a new transaction.  
  **Request Body Example:**
  ```json
  {
    "email": "alice@example.com",
    "amount": 50,
    "credits": 50,
    "timestamp": "2025-10-20 10:00"
  }
````

### Users

* **GET** `/users`
  Get the list of all users.

* **POST** `/users`
  Add a new user.
  **Request Body Example:**

  ```json
  {
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```

### Stats

* **GET** `/stats`
  Get overall statistics like total transactions, total credits, and last 10 users.

---

## 💻 Setup Instructions

### Backend

```bash
cd backend
npm install
npm run dev   # start server with nodemon
```

### Frontend

```bash
cd frontend
npm install
npm run dev   # start Vite dev server
```

Open the frontend in browser at `http://localhost:5173` (default Vite port).

---

