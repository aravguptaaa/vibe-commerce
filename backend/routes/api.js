// routes/api.js
const express = require('express');
const axios = require('axios');
const CartItem = require('../models/CartItem');

const router = express.Router();

// --- Product API ---
// GET /api/products
router.get('/products', async (req, res) => {
  try {
    const response = await axios.get('https://fakestoreapi.com/products');
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching products:', error.message);
    res.status(500).json({ error: 'Failed to fetch products from external API' });
  }
});

// --- Cart APIs ---
// GET /api/cart
router.get('/cart', async (req, res) => {
  try {
    const items = await CartItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error fetching cart items' });
  }
});

// POST /api/cart
router.post('/cart', async (req, res) => {
  try {
    // Check if item already exists in cart
    const existingItem = await CartItem.findOne({ productId: req.body.productId });

    if (existingItem) {
      // If it exists, update the quantity
      existingItem.quantity += req.body.quantity;
      await existingItem.save();
      res.status(200).json(existingItem);
    } else {
      // If it's a new item, create it
      const newItem = new CartItem({
        productId: req.body.id,
        title: req.body.title,
        price: req.body.price,
        image: req.body.image,
        quantity: req.body.quantity,
      });
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    }
  } catch (err) {
    res.status(400).json({ error: 'Failed to add item to cart', details: err.message });
  }
});

// DELETE /api/cart/:id
router.delete('/cart/:id', async (req, res) => {
  try {
    const item = await CartItem.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ error: 'Item not found in cart' });
    }
    res.json({ message: 'Item removed successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Server error deleting item' });
  }
});

// --- Checkout API ---
// POST /api/checkout
router.post('/checkout', async (req, res) => {
  try {
    const { total } = req.body;
    if (typeof total === 'undefined') {
        return res.status(400).json({ error: 'Total is required for checkout.' });
    }

    await CartItem.deleteMany({}); // Clears the entire cart collection for the mock user
    
    res.json({
      success: true,
      message: 'Checkout successful! Your cart has been cleared.',
      receipt: {
        totalAmount: total,
        transactionDate: new Date().toISOString(),
      },
    });
  } catch (err) {
    res.status(500).json({ error: 'Checkout process failed' });
  }
});

module.exports = router;