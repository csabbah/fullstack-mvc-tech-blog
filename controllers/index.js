const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const loginRoutes = require('./login-routes.js');
const dashboardRoutes = require('./dashboard.js');

router.use('/', homeRoutes);
router.use('/login', loginRoutes);
router.use('/dashboard', dashboardRoutes);

module.exports = router;
