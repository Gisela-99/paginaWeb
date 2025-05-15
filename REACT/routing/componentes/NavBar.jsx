import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav>
        <NavLink to={'/'}>Inicio</NavLink>
        <NavLink to={'/dragon'}>Dragon</NavLink>
        <NavLink to={'/new-Brain'}>New Brain</NavLink>
        <NavLink to={'/oric'}>Oric</NavLink>
        <NavLink to={'/spectrum'}>Oric</NavLink>
        <NavLink to={'/Toshiba'}>Toshiba</NavLink>
        <NavLink to={'/ZX-81'}>ZX 81</NavLink>
      </nav>
    </div>
  )
}

export default NavBar