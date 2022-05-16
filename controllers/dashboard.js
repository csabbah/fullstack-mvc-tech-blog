// Dashboard page
const router = require('express').Router();
const { Post } = require('../models');

router.get('/', (req, res) => {
  res.render('dashboard');

  // Return all active posts in the data base
  // Post.findAll({
  //   attributes: ['id', 'post_url', 'title', 'created_at', 'user_id'],
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
