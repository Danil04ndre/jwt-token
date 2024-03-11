import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1>Estamos en el Home</h1>
       <Link to="/users">Ver usuarios</Link>

    </div>
  )
}

export default Home