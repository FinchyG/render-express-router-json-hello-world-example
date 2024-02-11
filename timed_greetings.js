const express = require("express");
const router = express.Router();

// Timed greetings page route
router.get("/", function (req, res) {
    res.send("Get a greeting based on the time of day");
});

// Good morning page route
router.get("/morning", function (req, res) {
    res.json({ greeting: 'Good morning world' })
});

// Good afternoon page route
router.get("/afternoon", function (req, res) {
    res.json({ greeting: 'Good afternoon world' })
});

// Good evening page route
router.get("/evening", function (req, res) {
    res.json({ greeting: 'Good evening world' })
});

// Good night page route
router.get("/night", function (req, res) {
    res.json({ greeting: 'Good night world' })
});

module.exports = router;