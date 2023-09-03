const express = require('express');
const { newOrder, getSingleOrder, myOrder, getAllOrders, updateOrder, deleteOrder } = require('../controllers/orderController');
const { isAuthenticatedUser, authorizeRoles } = require('../middleware/auth');

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);
router.route("/order/:id").post(isAuthenticatedUser, getSingleOrder);
// router.route("/order/new").post(isAuthenticatedUser, myOrder);
// router.route("/admin/orders").get(isAuthenticatedUser,authorizeRoles("admin"), getAllOrders);
// router.route('/admin/order/:id').put(isAuthenticatedUser, authorizeRoles("admin"),updateOrder).delete(isAuthenticatedUser,authorizeRoles("admin"),deleteOrder)