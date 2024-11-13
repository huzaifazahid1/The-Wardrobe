const { connectToDatabase } = require('../config/db');
const { ObjectId } = require('mongodb');

async function createUser(userData) {
  const db = await connectToDatabase();
  return db.collection('Users').insertOne(userData);
}

async function getUserByEmail(email) {
  const db = await connectToDatabase();
  return db.collection('Users').findOne({ email });
}

async function getUserById(userId) {
  const db = await connectToDatabase();
  return db.collection('Users').findOne({ _id: new ObjectId(userId) });
}

async function updateUserById(userId, updateData) {
  const db = await connectToDatabase();
  return db.collection('Users').updateOne(
    { _id: new ObjectId(userId) },
    { $set: updateData }
  );
}

module.exports = { getUserByEmail, createUser, getUserById, updateUserById };
