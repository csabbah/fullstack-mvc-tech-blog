const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');

// Create a new post using the form input values from the dashboard page (template)
router.post('/', (req, res) => {
  Post.create({
    title: req.body.post_title,
    description: req.body.post_desc,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete('/:id', (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No Post found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
