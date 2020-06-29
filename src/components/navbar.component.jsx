import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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
          <li className="navbar-item">
            <NavLink
              activeClassName="navbar-link-active"
              className="navbar-link"
              to="/"
            >
              About Me
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              activeClassName="navbar-link-active"
              className="navbar-link"
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              activeClassName="navbar-link-active"
              className="navbar-link"
              to="/portfolio"
            >
              Portfolio
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              activeClassName="navbar-link-active"
              className="navbar-link"
              to="/contact"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
