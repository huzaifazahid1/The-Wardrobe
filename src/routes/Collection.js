const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/Mens", (req, res) => {
    res.sendFile("templates/Shop/Collection/MenCollection.html", { root: path.join(__dirname, "../") })
})

module.exports = router