const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// In this path, the main.handlebars template renders always and inside the {{{body}}} section....
// We render the homepage.handlebars template
router.get('/', (req, res) => {
  // This checks if the user is loggedIn via sessions data
  // console.log('THIS', req.session.loggedIn);

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

// Renders a single post with more detail
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id, // params == endpoint url data
    },
    attributes: ['id', 'title', 'created_at', 'user_id', 'description'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      const title = dbPostData.dataValues.title;
      const user = dbPostData.dataValues.user.username;
      const date = dbPostData.dataValues.created_at;
      const description = dbPostData.dataValues.description;
      const post = {
        title,
        date,
        user,
        description,
        comments: [],
      };
      // For each comment, push it to the array inside our object
      for (let i = 0; i < dbPostData.dataValues.comments.length; i++) {
        let username = dbPostData.dataValues.comments[i].user.username;
        let commentText = dbPostData.dataValues.comments[i].comment_text;
        post.comments.push({ user: username, text: commentText });
      }

      res.render('single-post', { post });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
