// The main page with all the main templates
const router = require('express').Router();

// In this path, the main.handlebars template renders always and inside the {{{body}}} section....
// We render the homepage.handlebars template (which is a simple <h1>Hi Son</h1>)
router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;
