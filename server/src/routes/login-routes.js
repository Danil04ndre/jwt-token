import { Router } from "express";
import { loginUser } from "../controllers/login-controller.js";

const routerLogin = Router();

routerLogin.post("/login", loginUser);

export default routerLogin;
