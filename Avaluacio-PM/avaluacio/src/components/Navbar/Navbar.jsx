import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyled = styled.nav`
  background-color: #222;       /* fondo oscuro */
  padding: 1rem 2rem;
  display: flex;
  gap: 2rem;                   /* espacio entre links */
  font-family: 'Arial', sans-serif;

  a {
    color: #ddd;               /* color texto normal */
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #f39c12;          /* color al pasar ratón */
    }
  }

  a.active {
    color: #f39c12;            /* color del enlace activo */
    border-bottom: 2px solid #f39c12; /* línea debajo */
  }
`

function Navbar() {
  return (
    <NavBarStyled>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
        Inicio
      </NavLink>
      <NavLink to='/cultura' className={({ isActive }) => (isActive ? 'active' : '')}>
        Cultura
      </NavLink>
    </NavBarStyled>
  )
}

export default Navbar
