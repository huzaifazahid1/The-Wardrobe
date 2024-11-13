const express = require('express');
const {sendAcknowledgementEmail, NotifySupportTeam} = require('../controllers/ContactController')

const router = express.Router();

// Route to send an automated acknowledgment email
router.post('/email/acknowledgment', sendAcknowledgementEmail);
// Route to notify the support team
router.post('/email/notify-support', NotifySupportTeam);

module.exports = router;
