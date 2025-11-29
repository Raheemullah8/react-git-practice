import React from 'react';
import "./nav.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-brand">My React App</div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;