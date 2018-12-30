module.exports = {

  isAdmin: function(req, res, next) {
    console.log(req.user, 'req.user in isAdmin middleware')
  }

};
