const UserModel = require('../models/userModel')

const addUserData = async (email,hashedPassword) => {
  try {
    userData = {
        email:email,
        password:hashedPassword
    }
    console.log(userData);
    const result = new UserModel(userData);
    const finalData = await result.save();
    // console.log(finalData,"final");
    return finalData;
  } catch (error) {
    throw {
      status: 500,
      send: { message: "internal server error" },
    };
  }
};


const getAllUsersData = async () => {
    try {
      const users = await UserModel.find({}, {__v: 0 });  
      return users;
    } catch (error) {
      throw { status: 500, message: "Internal server error" };
    }
  }
module.exports = {addUserData,getAllUsersData};
