import { Router } from "express";
import { getCursos } from "../controllers/login-controller.js";

const routerLogin = Router();

routerLogin.get("/", getCursos);


export default routerLogin;
