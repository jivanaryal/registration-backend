const mongoose = require("mongoose");

const connectDB = async (url) => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(url);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
