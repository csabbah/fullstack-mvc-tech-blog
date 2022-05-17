const router = require('express').Router();
const { Post } = require('../models');

// Return all posts associated with the user
router.get('/', (req, res) => {
  res.render('dashboard');

  // Return all users active posts in the data base
  // Post.findAll({
  //   attributes: ['id', 'title', 'created_at', 'user_id'],
  // })
  //   .then((dbPostData) => {
  //     res.json(dbPostData);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     res.status(500).json(err);
  //   });
});

module.exports = router;
