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
  logIn: (req, res) => {
    console.log('login called');
    const userDetails = req.body;
    console.log(userDetails, 'check in login');
    User.findOne({ username: userDetails.username }, (err, data) => {
      if (data) {
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
      }
      return res.status(401).json({
        msg: 'Please SignUp.',
      });
    });
  },
};
