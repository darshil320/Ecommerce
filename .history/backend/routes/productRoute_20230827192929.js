const express = require('express');
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
} = require("../controllers/productController");
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

router.route("/products").get(isAuthenticated,getAllProducts); 
router.route("/product/new").post(createProduct);
router.route("/product/:id").put(updateProduct);
router.route("/product/:id").delete(deleteProduct);
router.route("/product/:id").get(getProduct);


module.exports = router; 
