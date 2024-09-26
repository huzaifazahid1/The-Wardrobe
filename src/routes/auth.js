const express = require("express");
const router = express.Router();
const path = require("path");

// Login page
router.get("/Login", (req, res) => {
  res.sendFile("templates/Auth/login.html", { root: path.join(__dirname, "../") });
});

// Register page
router.get("/Register", (req, res) => {
  res.sendFile("templates/Auth/signup.html", { root: path.join(__dirname, "../") });
});

// Forget Password page
router.get("/Reset/Submit/Email", (req, res) => {
  res.sendFile("templates/Auth/Submit-Email.html", { root: path.join(__dirname, "../") });
})

module.exports = router;
