const express = require('express');

const router = express.Router();

router.route("/products").get(getAllProducts); 

exports.getProductById = (req, res) =>


module.exports = router;
