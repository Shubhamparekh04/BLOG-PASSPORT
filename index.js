const express = require("express");
const db = require("./configs/database");
const indexRouter = require("./router/indexRouter");
const redirectMiddleware = require("./middleware/redirectMiddleware");

const port = 8089;
const app = express();

//passport js/local (Stratergy) /session
const passport = require("passport");
const LocalStrategy = require("./middleware/passport");
const session = require("express-session");

app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 30,
    },
  })
);

// Initializing Passport
app.use(passport.initialize());

// Starting the session
app.use(passport.session());

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(express.static("public"));

app.use(redirectMiddleware);
app.use("/", indexRouter);

app.listen(port, (err) => {
  if (!err) {
    db();
    console.log("server runs on\nhttp://localhost:" + port);
  }
});
