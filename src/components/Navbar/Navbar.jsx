import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom"; // Use NavLink instead of Link
import "./Navbar.css"; // Your custom CSS file

const Navbar = ({ handleShowModal }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control the toggle
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control the dropdown
  const dropdownRef = useRef(null); // Ref to the dropdown menu

  const toggleNavbar = () => {
    setIsOpen(!isOpen); // Toggle the collapse on button click
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the dropdown visibility
  };

  // Close the dropdown if the user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false); // Close the dropdown if clicked outside
      }
    };

    // Add the event listener when the dropdown is open
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up the event listener when the component is unmounted or when dropdownOpen changes
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]); // Run effect when dropdownOpen changes

  return (
    <>
      {/* Topbar (No sticky effect) */}
      <div className="topbar">
        <div className="container">
          <div className="row no-gutters d-flex align-items-center">
            <div className="col-12 d-flex justify-content-between">
              {/* Phone Number */}
              <div className="d-flex align-items-center">
                <div className="icon mr-2">
                  <span className="icon-phone2"></span>
                </div>
                <span className="text">+ 1235 2355 98</span>
              </div>

              {/* Email */}
              <div className="d-flex align-items-center mx-4">
                <div className="icon mr-2">
                  <span className="icon-paper-plane"></span>
                </div>
                <span className="text">youremail@email.com</span>
              </div>

              {/* Open Hours */}
              <div className="d-flex align-items-center">
                <p className="mb-0 register-link text-right">
                  <span>Open hours:</span>
                  <span> Monday - Sunday</span>
                  <span> 8:00AM - 9:00PM</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar (Sticky) */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">My Website</NavLink>
          <NavLink className="navbar-brand" to="/services/affordableWorkspace">Affordable</NavLink>
          <NavLink className="navbar-brand" to="/blogPosts">BlogList</NavLink>

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
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/" activeClassName="active">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
              </li>

              {/* Services Dropdown */}
              <li className="nav-item dropdown" ref={dropdownRef} >
                <button
                  className="nav-link dropdown-toggle"
                  onClick={toggleDropdown}
                  aria-expanded={dropdownOpen ? "true" : "false"}
                  style={{ backgroundColor: "transparent", border: "none" }}
                >
                  Services
                </button>
                <div className={`dropdown-menu ${dropdownOpen ? "show" : ""}`} aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item" to="/services" activeClassName="active">Services Overview</NavLink>
                  <NavLink className="dropdown-item" to="/services/roaming" activeClassName="active">Roaming</NavLink>
                  <NavLink className="dropdown-item" to="/services/privateoffice" activeClassName="active">Private Office</NavLink>
                  <NavLink className="dropdown-item" to="/services/enterprise" activeClassName="active">Enterprise</NavLink>
                  <NavLink className="dropdown-item" to="/services/labmanaged" activeClassName="active">Lab Managed</NavLink>
                  <NavLink className="dropdown-item" to="/services/meetingrooms" activeClassName="active">Meeting Rooms</NavLink>
                </div>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/portfolio" activeClassName="active">Portfolio</NavLink>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link"
                  style={{ backgroundColor: "transparent", border: "none" }}
                  onClick={handleShowModal}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
