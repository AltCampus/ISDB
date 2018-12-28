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
};
