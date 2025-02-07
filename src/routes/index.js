const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");

// Ruta para crear un usuario
router.post("/", createUser);

module.exports = router;
