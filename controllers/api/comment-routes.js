const router = require('express').Router();
const { Comment } = require('../../models');

router.post('/:id', (req, res) => {
  console.log(req.params.id);
  // Check the session to make sure user is logged in
  Comment.create({
    comment_text: req.body.comment_text,
    post_id: req.body.post_id,
    // use the id from the session
    user_id: req.session.user_id,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
