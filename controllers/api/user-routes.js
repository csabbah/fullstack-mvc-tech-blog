const router = require('express').Router();
const sequelize = require('../../config/connection');
const { User } = require('../../models');

// Create a new post using the form input values from the dashboard page (template)
router.post('/', (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUsersData) => res.json(dbUsersData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
