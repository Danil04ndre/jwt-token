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
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/login",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include',
        body: JSON.stringify(form),
      }),
      json = await res.json();
      console.log(json)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="user">Nombre</label>
      <input type="text" id="user" name="user" onChange={handleForm}/>
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" onChange={handleForm}/>
      <button type="submit">Iniciar</button>
    </form>
  );
};

export default Login;
