const { getUserByEmail, createUser } = require('../models/User');
const { hashPassword, comparePassword } = require('../utils/passwordUtils');

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
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    const isPasswordValid = await comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', userId: user._id });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error: error.message });
  }
}

module.exports = { signup, login };
