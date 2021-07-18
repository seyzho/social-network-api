
const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');
const friendRoutes = require('./friend-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);
router.use('/users', friendRoutes);

module.exports = router