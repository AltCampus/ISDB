const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/login', (req, res) => {
  res.render('index');
});

router.get('/admin', (req, res) => {
  res.render('index');
});


module.exports = router;