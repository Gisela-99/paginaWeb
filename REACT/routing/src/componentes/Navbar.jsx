import React from 'react'
import { NavLink } from 'react-router-dom'
import Micros from '../../componentes/Micros'

function Navbar() {
  return (
    <nav>
      <NavLink to={'/'}>Inicio</NavLink>
      {
        Micros.map((micro, indice) => (
          <NavLink to={`/micro/${micro.micro}`} key={indice}>
            {micro.micro}
          </NavLink>
        ))
      }
    </nav>
  )
}

export default Navbar
