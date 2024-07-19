const userServices = require("../services/userServices");
const UserModel = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const SECRET_KEY = "auth123";

const addUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    hashedPassword = await bcrypt.hash(password, 10);
    const userDetails = await userServices.addUserData(email, hashedPassword);
    res.status(200).send(userDetails);
  } catch (error) {
    res.status(500).send({ message: "internal server error" });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const result = await userServices.getAllUsersData();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({ message: "Internal server error" });
  }
};

const loginUser = async (req, res) => {
  console.log(req.body);
  const userData = req.body;
  try {
    const UserEmail = await UserModel.findOne({ email: userData.email });
    console.log(UserEmail, "ue");
    if (!UserEmail) {
      res.status(UserEmail.status).send({ message: UserEmail.message });
    } else {
      const password = await bcrypt.compare(
        userData.password,
        UserEmail.password
      );
      if (!password) {
        res.status(500).send({ message: "Invalid Password" });
      } else {
        console.log(password);
        const token = jwt.sign(
          { id: UserEmail._id, email: UserEmail.email },
          SECRET_KEY,
          { expiresIn: "10m" }
        );
        console.log(token, "tokn");
        res
          .status(200)
          .send({ message: "Valid Email and Password", token: token });
      }
    }
  } catch (error) {}
};
module.exports = { addUser, getAllUsers, loginUser };
