const credModel = require("../models/credentialsModel");

module.exports.registerUser = async (req, res) => {
  try {
    if (req.body.password === req.body.confpassword) {
      await credModel.create(req.body);
      return res.redirect("/login");
    }
    console.log("password & confirm password should be same...!");
    return res.redirect(res.get("Referrer") || "/register");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports.checkLogin = async (req, res) => {
  try {
    let cred = await credModel.findOne({ username: req.body.username });
    console.log(cred.password, req.body.password);
    if (cred.password === req.body.password) {

      res.cookie("userId",cred.id);
      
      res.redirect("/clientHomepage");
    } else {
      console.log("invalid password...!");
      res.redirect("/login");
    }
  } catch (error) {
    res.redirect("/login");
    console.log(error.message);
  }
};
