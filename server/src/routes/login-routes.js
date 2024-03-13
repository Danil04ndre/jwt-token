import { Router } from "express";
import { getUsers, loginUser } from "../controllers/login-controller.js";
import jwt from "jsonwebtoken";
const routerLogin = Router();

routerLogin.post("/login", loginUser);
routerLogin.get("/users", validateToken, getUsers);

function validateToken(req, res, next) {
  const cookieToken = req.cookies.jwt;
  const headerToken = req.headers.authorization;

  if (!cookieToken || !headerToken) {
    return res.status(401).json({ msg: "Token de acceso no proporcionado" });
  }
  const tokenFromHeader = headerToken.split(" ")[1];
  
  if (String(cookieToken) !== String(tokenFromHeader)) {
    return res.status(401).json({ msg: "TOKEN INVALIDO" });
  }

  try {
    const validToken = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
    console.log({ validToken });
    next();
  } catch (error) {
    res.status(401).json({ msg: "Invalid Token" });
  }
}
export default routerLogin;
