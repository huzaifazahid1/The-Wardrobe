const express = require('express');
const { signup, login, verifyUserToken } = require('../controllers/authController');

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify-token', verifyUserToken);

module.exports = router;
