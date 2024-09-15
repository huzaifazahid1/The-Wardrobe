const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile("templates/cart/cart.html", { root: path.join(__dirname, "../") })
})

router.get("/checkout", (req, res) =>{
    res.sendFile("templates/cart/checkout.html", { root: path.join(__dirname, "../") })
})

module.exports = router