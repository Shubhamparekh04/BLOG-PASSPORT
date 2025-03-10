const express = require("express");
const db = require("./configs/database");
const indexRouter = require("./router/indexRouter");
const redirectMiddleware = require("./middleware/redirectMiddleware");


const cookieParser = require('cookie-parser');

const port = 8089;
const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.static("public"));


app.use(cookieParser());

app.use(redirectMiddleware);
app.use("/", indexRouter);

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("server runs on\nhttp://localhost:" + port);
  }
});
