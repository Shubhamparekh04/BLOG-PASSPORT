const { default: mongoose } = require("mongoose");

const db = async (req, res) => {
  try {
    await mongoose.connect(
      "mongodb+srv://shubhamparekh04:1234@cluster0.ycafm.mongodb.net/blog"
    );
    console.log("Database is connected...!");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = db;
