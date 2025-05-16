import React from 'react'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <span className="navbar-brand">Vinoteca</span>
        
        <button className="navbar-toggler" type="button" data- toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink to={'/'} className="nav-link" href='#'>Inicio </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/carta'} className="nav-link" href="#">Carta de vinos</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={'/alta'} className="nav-link" href="#">Nuevos Vinos</NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar