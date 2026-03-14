const express = require("express");
const router = express.Router();
const { addFavorite, getFavorites } = require("../controllers/favoriteController"); // <- لازم يكون صحيح
const auth = require("../middleware/auth");

router.post("/:artifactId", auth, addFavorite);
router.get("/", auth, getFavorites); // <- getFavorites يجب أن يكون function

module.exports = router;