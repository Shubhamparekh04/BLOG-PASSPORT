const { Router } = require("express");
const credRouter = Router();
const credController = require("../controller/credController");

credRouter.post("/registerUser",credController.registerUser);
credRouter.post("/checkLogin",credController.checkLogin);

module.exports = credRouter;
