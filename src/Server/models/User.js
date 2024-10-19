const { connectToDatabase } = require('../config/db');

async function getUserByEmail(email) {
  const db = await connectToDatabase();
  return db.collection('Users').findOne({ email });
}

async function createUser(userData) {
  const db = await connectToDatabase();
  return db.collection('Users').insertOne(userData);
}

module.exports = { getUserByEmail, createUser };
