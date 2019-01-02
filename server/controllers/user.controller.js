const passport = require('passport');
const User = require('./../models/User');

module.exports = {
  signUp: (req, res) => {
    const userDetails = req.body;
    const newUser = new User({
      ...userDetails,
    });

    newUser.save((err, data) => {
      if (err) throw err;
      res.status(200).json({
        data,
      });
    });
  },
  logIn: (req, res, next) => {
    passport.authenticate('local', (err, user) => {
      if (err) return next(err);
      if (!user) {
        return res.status(401).json({
          msg: 'Please SignUp.',
        });
      }
      return req.logIn(user, (error) => {
        if (error) return next(error);
        return User.findOne({ _id: user._id }, { password: 0 }, (e, data) => {
          if (e) throw err;
          if (data.isAdmin) {
            return res.status(200).json({
              msg: 'Logged In',
              redirectTo: '/admin',
            });
          }
          return res.status(200).json({
            msg: 'Logged In',
            redirectTo: '/',
          });
        });
      });
    })(req, res, next);
  },
  isLoggedIn: (req, res) => {
    if (req.user) {
      res.json({
        msg: 'You are already loggedIN.',
      });
    } else {
      res.json({
        msg: 'Please login.',
      });
    }
  },
};
