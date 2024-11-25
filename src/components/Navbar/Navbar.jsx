import React from "react";
import { Link } from "react-router-dom"; // To use React Router for navigation
import "./Navbar.css"; // Optional: Custom styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
      <div className="container">
        {/* Navbar Brand */}
        <Link className="navbar-brand" to="/">Labs</Link>

        {/* Navbar Toggler (Hamburger menu for mobile) */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#ftco-nav"
          aria-controls="ftco-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Services
        </button>

        {/* Navbar Menu */}
        <div className="collapse navbar-collapse" id="ftco-nav">
          <ul className="navbar-nav ml-auto">
            {/* Active Menu Item */}
            <li className="nav-item active">
              <Link to="/" className="nav-link">Home</Link>
            </li>

            {/* Other Menu Items */}
            <li className="nav-item">
              <Link to="/about" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">Services</Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
            {/* Call to Action Button */}
            <li className="nav-item ">
              <Link to="/reservation" className="nav-link">Book a Tour</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
