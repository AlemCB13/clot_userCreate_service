const mysql = require("mysql2/promise");

// Crear conexión con la base de datos
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const createUserDB = async (name, email, password) => {
  const [result] = await pool.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [name, email, password]);
  return result;
};

module.exports = { createUserDB };
