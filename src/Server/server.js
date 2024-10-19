const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());

// Use the auth routes
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
});
