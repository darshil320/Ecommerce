const express = require('express');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get( getAllProducts); 
router
  .route("/product/new")
  .post(isAuthenticated, authorizeRoles("admin"), createProduct);
router
  .route("/product/:id")
  .put(isAuthenticated, authorizeRoles("admin"), updateProduct);
router
  .route("/product/:id")
  .delete(isAuthenticated, authorizeRoles("admin"), deleteProduct);
router.route("/product/:id").get(getProduct);


module.exports = router; 
