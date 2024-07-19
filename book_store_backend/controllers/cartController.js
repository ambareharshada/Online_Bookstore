const UserModel = require("../models/userModel");
const OrderModel = require("../models/orderModel");

const addToCart = async (req, res) => {
  const userId = req.params.id;
  const { bookId } = req.body;
  try {
    const user = await UserModel.findById(userId);
    user.cart.push(bookId);
    await user.save();
    res.status(200).send(user.cart);
  } catch (e) {
    res.status(500).send(e);
  }
};

const viewCart = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserModel.findById(userId).populate("cart");
    res.status(200).send(user.cart);
  } catch (e) {
    res.status(500).send(e);
  }
};

const purchase = async (req, res) => {
  const userId = req.params.id;
  try {
    const user = await UserModel.findById(userId).populate("cart");
    console.log(user);
    if (user.cart.length === 0) {
      res.status(400).send({ message: "Cart is Empty..." });
    }
    const total = user.cart.reduce((acc, book) => acc + book.price, 0);
    const order = new OrderModel({
      user: userId,
      books: user.cart,
      total,
    });
    await order.save();
    user.cart = [];
    await user.save();
    console.log(order,"order");
    res.status(200).send(order);
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error.." });
  }
};

module.exports = {
  addToCart,
  viewCart,
  purchase,
};
