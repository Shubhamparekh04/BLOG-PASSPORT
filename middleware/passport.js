const passport = require("passport");
const credModel = require("../models/credentialsModel");
const LocalStrategy = require("passport-local").Strategy;

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      let user = await credModel.findOne({ username });
      if (user) {
        if (user.password === password) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } else {
        return done(null, false);
      }
    } catch (error) {
      return done(error, false);
    }
  })
);

passport.serializeUser((user, done) => {
  return done(null,user.id);
});

passport.deserializeUser(async (id, done) => {
  let user = await credModel.findById(id);
  return done(null, user);
});



module.exports = passport;
