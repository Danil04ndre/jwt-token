import { conn } from "../db/db.js";
import jwt from 'jsonwebtoken';

export const loginUser = async (req, res) => {
  let { user, password } = req.body;
  try {
    const sql = await conn.query(
      "SELECT * FROM users WHERE username = ? AND password = ?",
      [user, password]
    );

    if (sql[0].length > 0) {
      const token = jwt.sign({user},process.env.TOKEN_SECRET);
      res.cookie("jwt", token );
      res.status(200).json({ msg: "Usuario encontrado",user: user});
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error en la consulta SQL:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

export const getUsers = async (req, res) => {
  try {
    const sql = await conn.query("SELECT * FROM users");
    if (sql[0].length > 0) {
  
      res.status(200).json(sql[0]);
    } else {
      res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error("Error en la consulta SQL:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}


