import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Palette } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Palette className="me-2" size={24} />
          <span className="fw-bold">TypoDesign</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/typography" onClick={() => setIsOpen(false)}>Typography</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/graphic-design" onClick={() => setIsOpen(false)}>Designs</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/tools" onClick={() => setIsOpen(false)}>Tools</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
