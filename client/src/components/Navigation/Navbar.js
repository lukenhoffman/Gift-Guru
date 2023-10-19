import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // You can use icons from a library like react-icons for the menu toggle
import './navbar.css';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        GiftGenius
      </Link>
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="navbar-nav">
          <li>
            <NavLink
              to="/home"
              activeClassName="active"
              className="nav-link"
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/recommendations"
              activeClassName="active"
              className="nav-link"
              onClick={toggleMobileMenu}
            >
              Recommendations
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profile"
              activeClassName="active"
              className="nav-link"
              onClick={toggleMobileMenu}
            >
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/reminders"
              activeClassName="active"
              className="nav-link"
              onClick={toggleMobileMenu}
            >
              Reminders
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-mobile-toggle" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}

export default Navbar;
