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

async function verifyUserToken(req, res) {
  try {
    //   console.log('Headers received:', req.headers);
      const authHeader = req.headers.authorization;
      
      if (!authHeader) {
          console.log('No authorization header found');
          return res.status(401).json({ message: 'No token provided' });
      }

    //   console.log('Auth header:', authHeader);
      const token = authHeader.split(' ')[1];
      
      if (!token) {
          console.log('No token found in auth header');
          return res.status(401).json({ message: 'No token provided in correct format' });
      }

      const verification = verifyToken(token);
      console.log('Verification result:', verification);

      if (!verification.valid) {
          return res.status(401).json({ message: verification.error || 'Invalid token' });
      }

      return res.status(200).json({ valid: true, userId: verification.userId });

  } catch (error) {
      console.error('Server error in verifyUserToken:', error);
      return res.status(500).json({ 
          message: 'Error verifying token', 
          error: error.message,
          stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
      });
  }
}

// Middleware to verifyToken and Authorize a user
const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.id === req.params.id  || req.user.isCustomer) {
            next();
        } else {
            res.status(403).json('Not Authorized!');
        }
    })
};

module.exports = { verifyTokenAndAuthorization, verifyUserToken };