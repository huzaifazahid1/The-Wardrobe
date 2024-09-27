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

// Submit email page
router.get("/Reset/Submit/Email", (req, res) => {
  res.sendFile("templates/Auth/Submit-Email.html", { root: path.join(__dirname, "../") });
})

// Submit OTP page
router.get("/Reset/Submit/OTP", (req, res) => {
  res.sendFile("templates/Auth/SubmitOTP.html", { root: path.join(__dirname, "../") });
})

// reset password page
router.get("/Reset/Password", (req, res) => {
  res.sendFile("templates/Auth/Reset-Password.html", { root: path.join(__dirname, "../") });
})

module.exports = router;
