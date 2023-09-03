const express = require('express');
const { newOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route('/order/new').post(isAuthenticated, newOrder);