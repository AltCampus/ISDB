const router = require('express').Router();
const Startup = require('../models/Startup');
const userController = require('./../controllers/user.controller');
const startupController = require('../controllers/startup.controllers');

router.get('/check', (req, res) => {
  res.send('You are connected');
});

router.post('/startups', (req, res) => {
  console.log(req.body, 'startups req body');
  const newStartup = new Startup(req.body);
  newStartup.save((err, data) => {
    if (err) throw err;
    else {
      Startup.find({}, (err, data) => {
        if (err) throw err;
        else res.json(data);
      });
    }
  });
});

router.get('/startups', (req, res) => {
  console.log(req.body, req.params, req.query, 'in startups url');
  if (req.query.search) {
    console.log(req.query, 'query');
    Startup.findOne({ nameOfCompany: req.query.search }, (err, data) => {
      if (err) throw err;
      else res.json(data);
    });
  } else if (req.query.companyId) {
    console.log(req.query.companyId, 'companyId');
  } else {
    Startup.find({}, (err, data) => {
      if (err) throw err;
      else res.json(data);
    });
  }
});

router.put('/startups/:id/edit', startupController.update);

router.post('/signup', userController.signUp);

router.post('/login', userController.logIn);

router.get('/isLoggedIn', userController.isLoggedIn);

module.exports = router;
