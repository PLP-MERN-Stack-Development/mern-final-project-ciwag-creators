# Event Supply Shop (MERN Stack)

A full-stack MERN (MongoDB, Express, React, Node.js) E-commerce platform for an event supply shop, featuring a product catalog, shopping cart, checkout, admin dashboard, and real-time order notifications using Socket.io.

## 🌐 Live Demo

[https://mern-final-project-ciwag-creators.onrender.com](https://mern-final-project-ciwag-creators.onrender.com)

## 📦 Features

* User registration and login with JWT authentication
* Role-based access (customer / admin)
* Product catalog with categories
* Add products to cart and checkout
* Admin dashboard for product and order management
* Real-time notifications for new orders via Socket.io
* Responsive UI with React
* RESTful API with Express.js
* MongoDB database
* Unit, integration, and E2E testing setup
* CI/CD ready deployment

## 🛠 Tech Stack

* **Frontend:** React, React Router, Axios, Socket.io-client
* **Backend:** Node.js, Express.js, MongoDB, Mongoose, Socket.io
* **Authentication:** JWT
* **Testing:** Jest, Supertest, React Testing Library
* **Deployment:** Render (Frontend & Backend), MongoDB Atlas

## 📂 Project Structure

```
mern-final-project-ciwag-creators/
├─ backend/       # Express API + MongoDB
├─ frontend/      # React client
├─ README.md
```

## ⚡ Getting Started

### Backend

1. Clone the repo:

```bash
git clone https://github.com/PLP-MERN-Stack-Development/mern-final-project-ciwag-creators.git
cd mern-final-project-ciwag-creators/backend
```

2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and fill in your values (MONGO_URI, JWT_SECRET, CLIENT_URL)
4. Start the server:

```bash
npm run dev
```

Server will run on `http://localhost:5000`

### Frontend

1. Navigate to frontend folder:

```bash
cd ../frontend
```

2. Install dependencies:

```bash
npm install
```

3. Copy `.env.example` to `.env` and set `REACT_APP_API_URL=http://localhost:5000/api`
4. Start the React app:

```bash
npm start
```

Frontend will run on `http://localhost:3000`

## 🧪 Testing

* Backend: `npm test` inside `/backend`
* Frontend: `npm test` inside `/frontend`

## 🔗 Deployment

* Backend deployed to Render: Configure Root Directory to `/backend` and `npm start`.
* Frontend deployed to Render/Vercel: Configure Root Directory to `/frontend` and `npm run build`.
* Ensure `.env` variables are correctly set on the platform.

## 📄 API Endpoints

* **Auth:** `/api/auth/register`, `/api/auth/login`
* **Products:** `/api/products` (GET, POST, PUT, DELETE)
* **Orders:** `/api/orders` (POST, GET)

## ⚙️ Advanced Features

* Real-time new order notifications via Socket.io
* Admin CRUD for products and order management
* Cart management and checkout simulation

## 👨‍💻 Author

Izo Chiemeke — Fullstack Developer, MERN Specialist, Creator of this project

## 📌 License

This project is licensed under MIT License.
