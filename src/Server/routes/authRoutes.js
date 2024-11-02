const express = require('express');
const { signup, login } = require('../controllers/authController');
const { verifyUserToken } = require('../utils/authUtils');
const { requestPasswordReset, resetPasswordWithOTP } = require('../utils/resetPassword')

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
// Route to test the verifyUserToken Function
router.get('/verify-token', verifyUserToken);
// Route to request password reset
router.post('/request-password-reset', requestPasswordReset);
// Route to verify OTP and reset password
router.post('/reset-password-with-otp', resetPasswordWithOTP);


module.exports = router;
