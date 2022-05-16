const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-routes.js');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);

module.exports = router;
