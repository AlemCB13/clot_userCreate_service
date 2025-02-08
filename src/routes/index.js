const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");

// User Create Route
router.post("/", createUser);

module.exports = router;
