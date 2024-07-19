const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "books",
  },
  userId: String ,
  rating: { type: Number, min: 1, max: 5 },
  comment:  String ,
  createdAt: { type: Date, default: Date.now },
});
const reviewModel = mongoose.model("reviews", reviewSchema);

module.exports = reviewModel;
