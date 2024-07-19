const BookModel = require("../models/bookModel");

const addBook = async (req, res) => {
  try {
    console.log("req body", req.body);
    const details = req.body;
    const bookDetails = new BookModel(details);
    const result = await bookDetails.save();
    console.log(result,"result");
    res.status(200).send({ message: "Saved", result: result });
  } catch (error) {}
};

const getAllBooks = async(req,res)=>{
  try {
    const result = await BookModel.find({},{__v:0})
    res.status(200).send({message:"All Books",books:result})
  } catch (error) {
    res.status(500).send({message:"Error in get all"})
  }
}
module.exports ={
    addBook,
    getAllBooks
}
