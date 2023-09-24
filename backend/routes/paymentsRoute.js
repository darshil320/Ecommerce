const express = require('express'); 
const router = express.Router();
const {
  processPayment,
  sendStripeApiKey,
} = require("../controllers/paymentsControllers");
const { isAuthenticated } = require("../middleware/auth");


router.route("/payment/process").post(isAuthenticated, processPayment);
router.route("/stripeapikey").get(isAuthenticated, sendStripeApiKey);

module.exports = router;
