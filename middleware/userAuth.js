const userAuth = (req, res, next) => {
  if (req.cookies.userId) {
    next();
  } else {
    res.redirect("/login");
  }
};

module.exports = userAuth;
