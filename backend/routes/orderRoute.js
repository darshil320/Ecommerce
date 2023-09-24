const express = require('express');
const { newOrder, getSingleOrder, myOrder, getAllOrders, updateOrder, deleteOrder, myOrders } = require('../controllers/orderController');
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/order/new").post(isAuthenticated, newOrder);
router.route("/order/:id").get(isAuthenticated, getSingleOrder);
router.route("/orders/me").get(isAuthenticated, myOrders);
router   
  .route("/admin/orders")
  .get(isAuthenticated, authorizeRoles("admin"), getAllOrders);
router
  .route("/admin/order/:id")
  .put(isAuthenticated, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticated, authorizeRoles("admin"), deleteOrder); 

module.exports = router; 