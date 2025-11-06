// models/CartItem.js
const mongoose = require('mongoose');

const CartItemSchema = new mongoose.Schema({
  productId: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

module.exports = mongoose.model('CartItem', CartItemSchema);