module.exports = {
  isAdmin: (req, res, next) => {
    console.log(req.user);
    return next();
  },
};
