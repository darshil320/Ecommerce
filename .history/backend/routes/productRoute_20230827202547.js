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

router.route("/products").get(getAllProducts); 
router.route("/product/new").post(isAuthenticated,createProduct);
router.route("/product/:id").put(isAuthenticated,updateProduct);
router.route("/product/:id").delete(isAuthenticated,deleteProduct);
router.route("/product/:id").get(getProduct);


module.exports = router; 
