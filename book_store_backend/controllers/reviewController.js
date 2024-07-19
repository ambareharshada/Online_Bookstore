const reviewModel = require("../models/reviewModel");

const addReview = async (req, res) => {
  try {
    const details = {
      bookId: req.params.id,
      userId: req.body.userId,
      rating: req.body.rating,
      comment: req.body.comment,
    };
    const reviews = new reviewModel(details);
    const final = await reviews.save();
    res.status(200).send(final);
  } catch (error) {
    res.status(400).send(error);
  }
};

const getReviewForABook = async (req, res) => {
  try {
    const reviews = await reviewModel.find({ bookId: req.params.id });
    res.status(200).send(reviews);
  } catch (error) {
    res.status(400).send(error);
  }
};

module.exports = { addReview, getReviewForABook };
