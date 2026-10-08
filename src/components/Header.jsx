import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Hero.css';

export default function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className={`ms-nav ${!isHome ? 'ms-nav-solid' : ''}`} aria-label="Main">
      <Link className="ms-logo" to="/" aria-label="M&S Business Solutions home">
        M&S
      </Link>
      <ul className="ms-links">
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/services">
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
      <a className="ms-tel" href="tel:+61288147905" aria-label="Call 02 8814 7905">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" />
        </svg>
      </a>
    </nav>
  );
}
