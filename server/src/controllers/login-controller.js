import { conn } from "../db/db.js";

export const getCursos = async (req, res) => {
  try {
    const sql = await conn.query("SELECT * FROM users");
    if (sql) {
      console.log("datos recepcionados");
      res.json(sql[0]);
    } else {
      console.log("datos NO recepcionados");
    }
  } catch (error) {
    console.log("datos NOOO recepcionados",error);

  }
};
