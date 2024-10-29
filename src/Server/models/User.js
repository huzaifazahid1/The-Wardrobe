const { connectToDatabase } = require('../config/db');

async function createUser(userData) {
  const db = await connectToDatabase();
  return db.collection('Users').insertOne(userData);
}

async function getUserByEmail(email) {
  const db = await connectToDatabase();
  return db.collection('Users').findOne({ email });
}



module.exports = { getUserByEmail, createUser };
