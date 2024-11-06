const { hashPassword } = require('../utils/passwordUtils');
const { getUserByEmail } = require('../models/User');
const { updateUserPasswordByEmail } = require('../config/db');
const { comparePassword } = require('../utils/passwordUtils');
const jwt = require('jsonwebtoken');
const transporter = require('../utils/SendMail');
const { verifyUserToken } = require('./authUtils');
require('dotenv').config();

const { JWT_SECRET, SENDER_EMAIL } = process.env;

// Function to generate a 4-digit OTP
function generateOTP() {
    return Math.floor(1000 + Math.random() * 9000).toString();
}

// Function to request for Password Reset
async function requestPasswordReset(req, res) {
    const { email } = req.body;

    try {
        // Generate OTP
        const otp = generateOTP();

        // Send OTP to user's email
        const mailOptions = {
            from: SENDER_EMAIL,
            to: email,
            subject: 'Password Reset OTP',
            text: `Your OTP for password reset is: ${otp}`,
        };

        await transporter.sendMail(mailOptions);

        // Generate a JWT token with OTP and email
        const otpToken = jwt.sign({ otp, email }, JWT_SECRET, { expiresIn: '5m' });

        // Respond with JWT token
        res.status(200).json({ message: 'OTP sent to email', otpToken });
    } catch (error) {
        res.status(500).json({ message: 'Error sending OTP', error: error.message });
    }
}

// Function to reset Password with OTP
async function resetPasswordWithOTP(req, res) {
    const { otp, newPassword } = req.body;

    try {
        // Verify the JWT token
        const decoded = await verifyUserToken(req);
        // console.log(decoded)

        if (!decoded) {
            return res.status(401).json({ message: 'Invalid or expired token' });
        }

        // Check if OTP matches
        if (decoded.otp !== otp) {
            return res.status(400).json({ message: 'Invalid OTP' });
        }

        // Validate new password 
        if (newPassword.length < 8) {
            return res.status(400).json({ message: 'Password must be at least 8 characters long' });
        }

        // Fetch the user's old password from the database
        const user = await getUserByEmail(decoded.email);
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the old password with the new one
        const isSamePassword = await comparePassword(newPassword, user.password);
        if (isSamePassword) {
            return res.status(400).json({ message: 'New password cannot be the same as the old password' });
        }

        // Hash the new password
        const hashedPassword = await hashPassword(newPassword);

        // Update the password in the database
        const result = await updateUserPasswordByEmail(decoded.email, hashedPassword);

        // Check if passwordUpdate was successful
        if (result.modifiedCount === 0) {
            return res.status(400).json({ message: 'Password reset failed' });
        }

        res.status(200).json({ message: 'Password reset successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error resetting password', error: error.message });
    }
}

module.exports = { requestPasswordReset, resetPasswordWithOTP };