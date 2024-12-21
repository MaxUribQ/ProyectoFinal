
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Menu.css'

export default function Menu() {
  return (
    <nav className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/services">Servicios</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
      </ul>
    </nav>
  )
}
