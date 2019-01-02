const LocalStrategy = require('passport-local').Strategy;
const User = require('./../models/User');

module.exports = (passport) => {
  // serialize the user session
  passport.serializeUser((user, done) => {
    console.log(user, 'check 1')
    done(null, user._id);
  });
  
  passport.deserializeUser((_id, done) => {
    User.findById(_id, (err, user) => {
      done(err, user);
    });
  });
  passport.use(new LocalStrategy(
    (username, password, done) => {
      console.log(username, password, 'check 3');
      User.findOne({ username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) {
          return done(null, false);
        }
        return done(null, user);
      });
    },
  ));
};
