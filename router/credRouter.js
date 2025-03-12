const { Router } = require("express");
const credRouter = Router();
const credController = require("../controller/credController");
const passport = require("../middleware/passport");

credRouter.post("/registerUser",credController.registerUser);
credRouter.post("/login",passport.authenticate('local',{failureRedirect:'/login',successRedirect:'/clientHomepage'}),credController.login);

module.exports = credRouter;