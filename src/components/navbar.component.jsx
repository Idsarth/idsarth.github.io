import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleShowNavBar = () => {
    setToggle(!toggle);
  };

  return (
    <header className="l-navbar">
      <nav className="container navbar">
        <div className="navbar-brand">
          <span className="navbar-name">Idsarth</span>
        </div>
        <div onClick={handleShowNavBar} className="navbar-toggle">
          <FiMenu className="navbar-icon" size={30} />
        </div>
        <ul className={toggle ? 'navbar-list navbar-show' : 'navbar-list'}>
          <li className="navbar-item">
            <NavLink
              className="navbar-link"
              to="/"
            >
              About Me
            </NavLink>
          </li>
          <li className="navbar-item">
            <NavLink
              className="navbar-link"
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
