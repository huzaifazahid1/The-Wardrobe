const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });

const verifyToken = (token) => {
    try {
        console.log('Attempting to verify token:', token.substring(0, 10) + '...');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log('Token decoded successfully:', { userId: decoded.userId });
        return { valid: true, userId: decoded.userId };
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return { valid: false, error: error.message };
    }
};

module.exports = { verifyToken };