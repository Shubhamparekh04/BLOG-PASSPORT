const { Router } = require("express");

const indexRouter = Router();
const userRouter = require("./userRouter");
const credRouter = require("./credRouter");


indexRouter.use("/", userRouter);
indexRouter.use("/", credRouter);

module.exports = indexRouter;
