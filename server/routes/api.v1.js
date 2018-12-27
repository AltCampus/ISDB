const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('You are connected');
});

module.exports = router;
