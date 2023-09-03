const express = require('express');
const { newOrder, getSingleOrder, myOrder, getAllOrders, updateOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").post(isAuthenticatedUser, getSingleOrder);
router.route("/order/new").post(isAuthenticatedUser, myOrder);
router.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"), getAllOrders);

router.route('/admin/orders').put(isAuthenticatedUser, authorizeRoles("admin"),updateOrder)