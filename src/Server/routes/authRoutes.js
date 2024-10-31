const express = require('express');
const { signup, login, resetPassword } = require('../controllers/authController');
const { verifyUserToken } = require('../utils/authUtils')

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify-token', verifyUserToken);
router.get('/reset-password', resetPassword);

module.exports = router;
