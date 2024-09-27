const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile("templates/Shop/Collections/Collection.html", { root: path.join(__dirname, "../") })
})

router.get("/Mens", (req, res) => {
    res.sendFile("templates/Shop/Collections/Categories/MenCollection.html", { root: path.join(__dirname, "../") })
})

router.get("/Womens", (req, res) => {
    res.sendFile("templates/Shop/Collections/Categories/WomenCollection.html", { root: path.join(__dirname, "../") })
})

router.get("/Accessories", (req, res) => {
    res.sendFile("templates/Shop/Collections/Categories/AccessoriesCollection.html", { root: path.join(__dirname, "../") })
})

router.get("/Wearables", (req, res) => {
    res.sendFile("templates/Shop/Collections/Categories/WearablesCollection.html", { root: path.join(__dirname, "../") })
})

module.exports = router