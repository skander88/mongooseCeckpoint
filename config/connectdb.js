const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://skanderkhlif8:0GyhBfBMMA9fsVX8@cluster0.8vrfrjr.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("you are connected to db");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectdb;
