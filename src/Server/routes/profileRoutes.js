const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile } = require('../controllers/profileController');

// Route to get user profile
router.post('/get/user', getUserProfile);
// Route to update user profile
router.put('/update/user', updateUserProfile);

module.exports = router;