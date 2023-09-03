const express = require('express');
const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword, getUserDetails, updatePassword } = require('../controllers/userController');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

router.route('/register').post(registerUser);

router.route("/login").post(loginUser);

router.route("/password/forgot").post(forgotPassword);

router.route("/password/reset/:token").put(resetPassword);

router.route("/logout").post(logoutUser);
router.route("/me").post(isAuthenticated,getUserDetails);
router.route("/password/update").put(isAuthenticated,updatePassword);

module.exports = router;