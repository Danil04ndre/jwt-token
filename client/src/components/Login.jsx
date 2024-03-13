import React, { useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";


const initialForm = {
  user: "",
  password: "",
};

const Login = () => {
  const [form, setform] = useState(initialForm);
  const {user, setUser} = useContext(UserContext);

  const handleForm = (e) => {
    setform({
        ...form,
        [e.target.name]: e.target.value
    })
  };
  const navigate = useNavigate()
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
      setUser(json.user);
      console.log(json);
      if(json.msg){
        navigate("/home");
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
 <>
    <form className="login-form" onSubmit={handleSubmit}>
      <label htmlFor="user">Nombre</label>
      <input type="text" id="user" name="user" onChange={handleForm}/>
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" onChange={handleForm}/>
      <button type="submit">Iniciar</button>
    </form>
    <img src="https://i.pinimg.com/736x/ee/0d/2a/ee0d2ae741c8eb0effd9cf99d459df4d.jpg" alt="" width="100px"/>
    </>
  );
};

export default Login;
