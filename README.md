# Vibe Commerce 🛍️

Vibe Commerce is a lightweight, fully functional e-commerce web application built with the MERN stack (MongoDB, Express, React, Node.js). It features a clean, responsive interface for browsing products, managing a shopping cart, and completing a mock checkout process.

The application integrates with a live external API for product data and uses a persistent database to manage the user's cart across sessions.

---

## ✨ Features

- **Product Catalog**: Fetches and displays a list of products from the [Fake Store API](https://fakestoreapi.com/).
- **Shopping Cart**: Add items to the cart, view all items, and see a running total.
- **Persistent Cart**: Cart items are saved to a MongoDB database, so they persist between browser sessions for a mock user.
- **Remove from Cart**: Easily remove items you no longer want.
- **Mock Checkout**: A simple checkout form that simulates an order and provides a receipt confirmation.
- **Responsive Design**: A mobile-first design that looks great on desktops, tablets, and phones.
- **RESTful API**: A well-structured backend API to handle all product and cart-related logic.

---

## 🛠️ Tech Stack

### Frontend

- **React**: A JavaScript library for building user interfaces.
- **Axios**: For making promise-based HTTP requests to the backend API.
- **CSS**: Custom styling for a modern and clean look.

### Backend

- **Node.js**: A JavaScript runtime environment.
- **Express**: A minimal and flexible Node.js web application framework.
- **MongoDB**: A NoSQL database for storing cart data.
- **Mongoose**: An ODM (Object Data Modeling) library for MongoDB and Node.js.
- **CORS**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: For managing environment variables.

---

## 📂 Project Structure

```
vibe-commerce/
├── backend/            # Node.js/Express Backend
│   ├── config/         # Database connection logic
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API endpoint definitions
│   ├── .env            # (You must create this for credentials)
│   ├── server.js       # Main server entry point
│   └── package.json
│
├── frontend/           # React Frontend
│   ├── public/
│   └── src/
│       ├── assets/     # Local images
│       ├── components/ # Reusable React components
│       ├── App.js      # Main application component
│       ├── api.js      # Axios configuration
│       └── ...
│
├── .gitignore          # (We will create this)
└── README.md
```

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer)
- `npm` (usually comes with Node.js)
- `git` command line tool
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) account for the database.

### Installation & Setup

**1. Clone the Repository**

```bash
git clone https://github.com/aravguptaaa/vibe-commerce.git
cd vibe-commerce
```

**2. Backend Setup**

```bash
# Navigate to the backend directory
cd backend

# Install dependencies
npm install

# Create a .env file in the backend/ directory
touch .env
```

Add your MongoDB connection string to the `.env` file. **Remember to replace `<password>` with your actual database user password.**

```env
# backend/.env
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/vibe-commerce-db?retryWrites=true&w=majority
```

Now, start the backend server:

```bash
# Run the server (it will run on http://localhost:5001)
node server.js
```

**3. Frontend Setup**

Open a **new terminal window** and navigate to the project root again.

```bash
# Navigate to the frontend directory from the project root
cd frontend

# Install dependencies
npm install

# Run the React development server (it will open in your browser)
npm start
```

Your application should now be running, with the frontend on `http://localhost:3000` connected to the backend on `http://localhost:5001`.

---

## ⚙️ API Endpoints

The backend server provides the following RESTful API endpoints:

| Method     | Endpoint          | Description                                      |
| :--------- | :---------------- | :----------------------------------------------- |
| `GET`    | `/api/products` | Fetches all products from the Fake Store API.    |
| `GET`    | `/api/cart`     | Retrieves all items currently in the cart.       |
| `POST`   | `/api/cart`     | Adds a new item to the cart or updates quantity. |
| `DELETE` | `/api/cart/:id` | Removes a specific item from the cart by its ID. |
| `POST`   | `/api/checkout` | Clears the cart and returns a mock receipt.      |
