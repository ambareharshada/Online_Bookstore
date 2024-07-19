const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
  books: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
  total: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('order', orderSchema);