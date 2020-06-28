import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleShowNavbar = () => {
    setToggle(!toggle);
  };

  return (
    <header className="l-navbar">
      <nav className="container navbar">
        <div className="navbar-brand">
          <span className="navbar-name">Idsarth</span>
        </div>
        <div onClick={handleShowNavbar} className="navbar-toggle">
          <FiMenu className="navbar-icon" size={30} />
        </div>
        <ul className={toggle ? 'navbar-list navbar-show' : 'navbar-list'}>
          <li className="navbar-item navbar-item-active">
            <Link className="navbar-link" to="/">About Me</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/portfolio">Portfolio</Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/contact">Contact Me</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
