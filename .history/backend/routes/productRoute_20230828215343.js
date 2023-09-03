const express = require('express');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  createProductReview,
  deleteReview,
  getProductsReviews,
} = require("../controllers/productController");
const { isAuthenticated, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get( getAllProducts); 
router
  .route("/admin/product/new")
  .post(isAuthenticated, authorizeRoles("admin"), createProduct);
router
  .route("/admin/product/:id")
  .put(isAuthenticated, authorizeRoles("admin"), updateProduct);
router
  .route("/admin/product/:id")
  .delete(isAuthenticated, authorizeRoles("admin"), deleteProduct);
   
router.route("/product/:id").get(getProduct);

router.route("/review").put(isAuthenticated, createProductReview);
router
  .route("/reviews")
  .get(getProductsReviews)
  .delete(isAuthenticated, deleteReview);


module.exports = router; 
