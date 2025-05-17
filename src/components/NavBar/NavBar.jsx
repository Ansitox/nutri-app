import React from "react";
import { Link } from "react-router-dom";
import "./navBar.css"

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex gap-4">
      <Link to="/">Inicio</Link>
      <Link to="/entry">Nueva Entrada</Link>
      <Link to="/summary">Resumen Diario</Link>
    </nav>
  );
}