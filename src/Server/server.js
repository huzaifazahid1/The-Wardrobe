const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const contactRoutes = require('./routes/ContactRoutes')

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies

// Use the auth routes
app.use('/auth', authRoutes);
app.use('/Contact', contactRoutes)

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
