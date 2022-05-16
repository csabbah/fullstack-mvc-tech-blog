// The main page with all the main templates
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

// In this path, the main.handlebars template renders always and inside the {{{body}}} section....
// We render the homepage.handlebars template (which is a simple <h1>Hi Son</h1>)
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'post_url', 'title', 'created_at', 'user_id'],
  })
    .then((dbPostData) => {
      // serialize the data
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      res.render('homepage', { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
