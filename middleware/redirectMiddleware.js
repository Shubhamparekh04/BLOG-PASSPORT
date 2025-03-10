const redirectMiddleware = (req, res, next) => {
  if (req.url === "/") {
    return res.redirect("/clientHomepage");
  }

  next();
};

module.exports = redirectMiddleware;
