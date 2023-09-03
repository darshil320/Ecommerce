const express = require('express');
const { newOrder, getSingleOrder, myOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").post(isAuthenticatedUser, getSingleOrder);
router.route("/order/new").post(isAuthenticatedUser,myOrder );