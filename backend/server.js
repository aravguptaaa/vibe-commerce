// server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

// Connect to Database
connectDB();

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api', apiRoutes);

// A simple test route to verify the server is running
app.get('/', (req, res) => {
  res.json({ message: 'Vibe Commerce API is alive!' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});