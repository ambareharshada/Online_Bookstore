const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectDB = await mongoose.connect("mongodb://localhost:27017/bookStore");
    console.log("Database Connected ");
  } catch (error) {
    console.log("Database Not Connected ");
  }
};

module.exports = connectDB;
