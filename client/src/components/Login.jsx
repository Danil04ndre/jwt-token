import React from "react";
import { useState } from "react";

const initialForm = {
  user: "",
  password: "",
};

const Login = () => {
  const [form, setform] = useState(initialForm);

  const handleForm = (e) => {
    setform({
        ...form,
        [e.target.name]: e.target.value
    })
  };
  return (
    <form className="login-form">
      <label htmlFor="user">Nombre</label>
      <input type="text" id="user" name="user" onChange={handleForm}/>
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" onChange={handleForm}/>
      <button type="submit">Iniciar</button>
    </form>
  );
};

export default Login;
