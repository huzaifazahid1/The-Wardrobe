const express = require('express');
const router = express.Router();
const { getUserProfile } = require('../controllers/profileController');

// Route to get user profile
router.post('/get/user', getUserProfile);

module.exports = router;