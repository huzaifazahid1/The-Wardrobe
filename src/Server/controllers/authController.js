const { getUserByEmail, createUser } = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');
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
    console.log(user.email)
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

async function resetPassword(req, res) {
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
    res.status(500).json({ message: 'User doesn\'t exist', error: error.message });
  }
}

module.exports = { signup, login, resetPassword };
