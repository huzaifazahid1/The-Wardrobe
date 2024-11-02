const { MongoClient } = require('mongodb');
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/TheWardrobe';
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    await client.connect();
    return client.db('TheWardrobe');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
}

async function updateUserPasswordByEmail(email, newPassword) {
  const db = client.db('TheWardrobe'); // Replace with your database name
  const result = await db.collection('Users').updateOne(
    { email: email },
    { $set: { password: newPassword } }
  );
  return result;
}

module.exports = { connectToDatabase, updateUserPasswordByEmail};
