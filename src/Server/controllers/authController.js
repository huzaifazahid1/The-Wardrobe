const { getUserByEmail, createUser } = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
const { verifyToken } = require('../utils/authUtils');
const jwt = require('jsonwebtoken');

require('dotenv').config({ path: './.env' });

const JWT_SECRET = process.env.JWT_SECRET;

async function signup(req, res) {
  const { name, email, password, phone, locality, road, house, landmark } = req.body;

  try {
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = await createUser({
      name,
      email,
      password: hashedPassword,
      phone,
      locality,
      road,
      house,
      landmark
    });

    res.status(201).json({ message: 'User created successfully', userId: newUser.insertedId });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error: error.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  try {
      const user = await getUserByEmail(email);
      if (!user || !(await comparePassword(password, user.password))) {
          return res.status(400).json({ message: 'Invalid credentials' });
      }

      // Create a JWT token with 30 days expiration
      const token = jwt.sign(
          { userId: user._id },
          JWT_SECRET,
          { expiresIn: '30d' } // 30 days expiry
      );

      // Send the token and user info back
      res.status(200).json({ message: 'Login successful', token, userId: user._id });
  } catch (error) {
      res.status(500).json({ message: 'Error logging in', error: error.message });
  }
}

async function verifyUserToken(req, res) {
  try {
      const authHeader = req.headers.authorization;
      
      if (!authHeader) {
          return res.status(401).json({ message: 'No token provided' });
      }

      const token = authHeader.split(' ')[1];
      
      if (!token) {
          return res.status(401).json({ message: 'No token provided in correct format' });
      }

      const verification = verifyToken(token);

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

module.exports = { signup, login, verifyUserToken };
