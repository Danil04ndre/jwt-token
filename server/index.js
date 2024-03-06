import express from "express";
import routerLogin from "./src/routes/login-routes.js";
import cors from "cors";
import { config } from "dotenv";
import cookieParser from "cookie-parser";



config();
const app = express();
app.use(cors({
  origin: "http://localhost:5173", // Permitir solicitudes desde el frontend
  credentials: true // Permitir el envío de cookies de forma cruzada
}));
app.use(express.json());
app.use(cookieParser());
app.use(routerLogin);

app.listen(3000, () => {
  console.log("server 3000 port");
});
