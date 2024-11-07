const express = require('express');
const { signup, login } = require('../controllers/authController');
const { verifyUserToken } = require('../utils/authUtils');
const { requestPasswordReset, resetPasswordWithOTP } = require('../controllers/ResetPasswordController')

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
// Route to test the verifyUserToken Function
router.get('/verify-token', verifyUserToken);
// Route for requesting a password reset
router.post('/password-reset/request', requestPasswordReset);
// Route for verifying OTP and resetting the password
router.post('/password-reset/verify-otp', resetPasswordWithOTP);


module.exports = router;
