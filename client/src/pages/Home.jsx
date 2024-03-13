import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/UserContext'

const Home = () => {
  const {user} = useContext(UserContext);
  return (
    <div>

        <h1>Estamos en el Home</h1>
        <span>{user ? user : 'invitado'}</span> <br /> 
       <Link to="/users">Ver usuarios</Link>

    </div>
  )
}

export default Home