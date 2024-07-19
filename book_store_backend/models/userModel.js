const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: false },
  password: { type: String, required: false },
  borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
  recommendedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }],
  cart: [{ type: mongoose.Schema.Types.ObjectId, ref: 'books' }]

});

const userModel = mongoose.model('users',userSchema);

module.exports = userModel;