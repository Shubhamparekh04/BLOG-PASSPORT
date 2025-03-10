const blogModule = require("../models/userModel");
const fs = require("fs");

module.exports.homePage = async (req, res) => {
  try {
    const blogData = await blogModule.find({});
    res.render("index", { blogData });
  } catch (error) {
    console.log(error.message);
    res.render("index", { blogData: {} });
  }
};

module.exports.formPage = (req, res) => {
  res.render("form");
};

module.exports.blogCreate = async (req, res) => {
  try {
    await blogModule.create({ ...req.body, image: req.file.path });
    res.redirect("/formPage");
  } catch (error) {
    console.log(error.message);
    res.redirect("/formPage");
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await blogModule.findByIdAndDelete(id);
    res.redirect("/clientHomepage");
  } catch (error) {
    console.log(error.message);
    res.redirect("/clientHomepage");
  }
};

module.exports.editBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBlog = await blogModule.findById(id);
    res.render("editform", { singleBlog });
  } catch (error) {
    console.log(error.message);
    res.render("editform", { singleBlog: [] });
  }
};

module.exports.updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBlog = await blogModule.findById(id);
    let updatedBlog = { ...req.body };

    if (req.file) {
      fs.unlinkSync(singleBlog.image);
      updatedBlog.image = req.file.path;
    } else {
      updatedBlog.image = req.body.oldImage;
    }

    await blogModule.findByIdAndUpdate(id, updatedBlog);
    res.redirect("/clientHomepage");
  } catch (error) {
    console.log(error.message);
    res.redirect("/clientHomepage");
  }
};

module.exports.viewSingleBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const singleBlog = await blogModule.findById(id);
    res.render("single", { singleBlog });
  } catch (error) {
    console.log(error.message);
    res.render("single", { singleBlog: {} });
  }
};

module.exports.loginPage = (req,res)=>{
  res.render("login");
}

module.exports.registerPage = (req,res)=>{
  res.render("register");
}