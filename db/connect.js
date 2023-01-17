const mongoose = require("mongoose");

const connectDB = async (url) => {
  mongoose.set("strictQuery", false);
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
