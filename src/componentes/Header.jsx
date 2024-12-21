
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

export default function Header() {
  return (
    <header>
      <h1>WIKI</h1>
      <nav>
        <Link to="/">General</Link>
        <Link to="/explorar">Explorar</Link>
        <Link to="/guias">Guías</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
    </header>
  )
}
