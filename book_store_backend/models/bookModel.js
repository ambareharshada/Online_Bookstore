const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: false },
  author: { type: String, required: false },
  genre: { type: String, required: false },
  description: { type: String, required: false },
  ratings: { type: Number, required: false },
  price: { type: Number, required: false },
});

const bookModel = mongoose.model("books", bookSchema);

module.exports = bookModel;
