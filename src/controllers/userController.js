const { createUserDB } = require("../models/userModel");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ message: "Todos los campos son requeridos" });
    }

    const result = await createUserDB(name, email, password);
    res.status(201).json({ message: "Usuario creado exitosamente", userId: result.insertId });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

module.exports = { createUser };
