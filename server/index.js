import express from "express";
import routerLogin from "./src/routes/login-routes.js";

const app = express();

app.use(routerLogin);

app.listen(3000, () => {
  console.log("server 3000 port");
});
