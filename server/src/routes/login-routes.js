import { Router } from "express";
import { getUsers, loginUser } from "../controllers/login-controller.js";
import jwt from 'jsonwebtoken'
const routerLogin = Router();

routerLogin.post("/login", loginUser);
routerLogin.get("/users",validateToken, getUsers);

function validateToken(req, res, next) {
  try {
    const validToken = jwt.verify(req.cookies.jwt, process.env.TOKEN_SECRET);
    console.log({ validToken });
    next();
  } catch (error) {
    res.status(401).json({msg: "Invalid Token"})
  }
}
export default routerLogin;
