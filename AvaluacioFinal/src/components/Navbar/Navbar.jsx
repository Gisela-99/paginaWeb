import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const NavBarStyled = styled.nav`
  background-color: #222;       
  display: flex;
  gap: 2rem;                   
  font-family: 'Arial', sans-serif;
  max-width: 1500px;
  margin: 0 auto;
  border-top:2px solid #f39c12;

  a {
    color: #ddd;               
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1rem;
    transition: color 0.3s ease;
    padding: 1rem 2rem;

    &:hover {
      color: #f39c12;          
    }
  }

  a.active {
    color: #f39c12;            
    border-bottom: 2px solid #f39c12; 
  }
`

function Navbar() {
  return (
    <NavBarStyled>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>
        Inicio
      </NavLink>
      <NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>
        Acerca de 
      </NavLink>
      <NavLink to='/hechizos' className={({ isActive }) => (isActive ? 'active' : '')}>
        Hechizos
      </NavLink>
    </NavBarStyled>
  )
}

export default Navbar
