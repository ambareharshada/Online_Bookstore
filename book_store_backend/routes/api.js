const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticateToken");
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const cartController = require("../controllers/cartController");
const reviewController = require("../controllers/reviewController");

//user routes
router.post("/users/addUser/", userController.addUser);
router.get(
  "/users/getAllUsers/",
  authenticateToken,
  userController.getAllUsers
);
router.post("/user/login/", userController.loginUser);

// book routers
router.post("/books/addBooks/", bookController.addBook);
router.get("/books/getAllBooks/", bookController.getAllBooks);

//add to cart books
router.post("/users/:id/addToCart/", cartController.addToCart);
router.get("/users/:id/viewCart/", cartController.viewCart);
router.post("/users/:id/purchase/", cartController.purchase)

//api for reviews
router.post("/books/:id/reviews",reviewController.addReview)
router.get("/books/:id/reviews",reviewController.getReviewForABook)
module.exports = router;
