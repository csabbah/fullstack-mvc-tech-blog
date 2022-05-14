// The main page with all the main templates

const router = require('express').Router();

// get all posts for homepage
router.get('/', (req, res) => {
  res.json('hi');
});

module.exports = router;
