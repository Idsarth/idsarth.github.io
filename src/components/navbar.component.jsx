import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <header className="container l-navbar">
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="https://abyeneregia.net/assets/img/theme/av.png" alt="Idsarth" />
        <span className="navbar-name">Idsarth Juarez</span>
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link className="navbar-link" to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/portfolio">Portfolio</Link>
        </li>
        <li className="navbar-item">
          <Link className="navbar-link" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;
