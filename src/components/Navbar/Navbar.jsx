import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Your custom CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to control the toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control the dropdown

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the collapse on button click
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown visibility
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">My Website</Link>

        {/* Toggle Button for Mobile View */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={toggleNavbar} 
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Navbar */}
        <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            
            {/* Services Dropdown */}
            <li className="nav-item dropdown">
              <button 
                className="nav-link dropdown-toggle" 
                onClick={toggleDropdown} 
                aria-expanded={dropdownOpen ? "true" : "false"}
                style={{ backgroundColor: "transparent", border: "none" }}
              >
                Services
              </button>
              <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/services">Services Overview</Link>
                <Link className="dropdown-item" to="/services/roaming">Roaming</Link> {/* Roaming link */}
              </div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
