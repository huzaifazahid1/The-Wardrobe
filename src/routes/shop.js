const express = require("express");
const router = express.Router();
const path = require("path");

// Shop page
router.get("/", (req, res) => {
  res.sendFile("templates/Shop/Shop.html", { root: path.join(__dirname, "../") });
});

module.exports = router;
