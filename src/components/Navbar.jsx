import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { FaHome, FaUser, FaProjectDiagram, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ theme, setTheme }) => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src="/images/large (2).png" alt="Logo" />
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          <Link className={location.pathname === "/" ? "active" : ""} to="/" onClick={() => setMenuOpen(false)}>
            <FaHome /> Home
          </Link>
          <Link className={location.pathname === "/about" ? "active" : ""} to="/about" onClick={() => setMenuOpen(false)}>
            <FaUser /> About
          </Link>
          <Link className={location.pathname === "/projects" ? "active" : ""} to="/projects" onClick={() => setMenuOpen(false)}>
            <FaProjectDiagram /> Projects
          </Link>
          <Link className={location.pathname === "/contact" ? "active" : ""} to="/contact" onClick={() => setMenuOpen(false)}>
            <FaEnvelope /> Contact
          </Link>
        </div>
      </div>

      <div className="nav-right">
        <ThemeToggle theme={theme} setTheme={setTheme} />
        <button className="hamburger" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
