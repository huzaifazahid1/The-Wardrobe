const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });

const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return { valid: true, decoded: decoded };
    } catch (error) {
        console.error('Token verification failed:', error.message);
        return { valid: false, error: error.message };
    }
};

async function verifyUserToken(req, res) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ message: 'No token provided' });
        }

        const token = authHeader.split(' ')[1];

        if (!token) {
            console.log('No token found in auth header');
            return res.status(401).json({ message: 'No token provided in correct format' });
        }

        const verification = verifyToken(token);
        console.log('Verification result:', verification);

        if (!verification.valid) {
            throw new Error(verification.error || 'Invalid token');
        }
        return verification.decoded;
    } catch (error) {
        throw error; // Re-throw the error so the calling function can handle it
    }
}

// Middleware to verifyToken and Authorize a user
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id || req.user.isUser) {
            next();
        } else {
            res.status(403).json('Not Authorized!');
        }
    })
};

module.exports = { verifyTokenAndAuthorization, verifyUserToken, verifyToken };