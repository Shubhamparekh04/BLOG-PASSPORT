const { default: mongoose } = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: String,
    image: String,
    content: String,
    username: String,
  },
  { timestamps: true }
);

const blogModule = mongoose.model("blogModule", blogSchema);
module.exports = blogModule;
