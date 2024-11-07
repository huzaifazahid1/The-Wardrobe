const express = require('express');
const sendAcknowledgementEmail = require('../controllers/ContactController')

const router = express.Router();

// Route to send an automated acknowledgment email
router.post('/email/acknowledgment', sendAcknowledgementEmail);


module.exports = router;
