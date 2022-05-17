// The main page with all the main templates
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User } = require('../models');

// In this path, the main.handlebars template renders always and inside the {{{body}}} section....
// We render the homepage.handlebars template
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'created_at', 'user_id'],
  })
    .then((dbPostData) => {
      // serialize the data, essentially making it an easier object to iterate through
      const posts = dbPostData.map((post) => post.get({ plain: true }));
      // Render the homepage template and include the posts object we just declared
      res.render('homepage', { posts });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
