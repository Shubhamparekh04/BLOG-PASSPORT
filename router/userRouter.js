const { Router } = require("express");
const userRouter = Router();
const userController = require("../controller/userController");
const upload = require("../middleware/imageUpload");

userRouter.get("/clientHomepage", userController.homePage);
userRouter.get("/formPage",userController.formPage);
userRouter.get("/delete/:id", userController.deleteBlog);
userRouter.get("/edit/:id", userController.editBlog);
userRouter.get("/view/:id", userController.viewSingleBlog);
userRouter.get("/login", userController.loginPage);
userRouter.get("/register", userController.registerPage);
userRouter.post("/update/:id", upload, userController.updateBlog);
userRouter.post("/formPage",upload, userController.blogCreate);
module.exports = userRouter;
