const router = require('express').Router();
const Startup = require('../models/Startup');

router.get('/check', (req, res) => {
  res.send('You are connected');
});

router.post('/startups', (req, res) => {
  console.log(req.body, 'startups req body');
  const newStartup = new Startup(req.body);
  newStartup.save((err, data) => {
    if(err) throw err;
    else  {
      Startup.find({}, (err, data) => {
        res.json(data);
      });
    }
  });
});

router.get('/startups', (req, res) => {
  Startup.find({}, (err, data) => {
    console.log(data, "data in get method");
    res.json(data);
  });
});

module.exports = router;
