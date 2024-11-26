import React, { useState, useEffect } from "react";
import "../TopBar/Topbar.css"; // Add your own styling or use inline styles if needed

const Topbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true); // Add sticky class when scrolled
      } else {
        setIsSticky(false); // Remove sticky class when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`py-2 bg-dark text-white topbar ${isSticky ? "sticky" : ""}`}>
      <div className="container">
        <div className="row no-gutters d-flex align-items-center">
          <div className="col-12 d-flex justify-content-between">
            {/* Phone Number */}
            <div className="d-flex align-items-center">
              <div className="icon mr-2 d-flex justify-content-center align-items-center">
                <span className="icon-phone2"></span>
              </div>
              <span className="text">+ 1235 2355 98</span>
            </div>

            {/* Email */}
            <div className="d-flex align-items-center mx-4">
              <div className="icon mr-2 d-flex justify-content-center align-items-center">
                <span className="icon-paper-plane"></span>
              </div>
              <span className="text">youremail@email.com</span>
            </div>

            {/* Open Hours */}
            <div className="d-flex align-items-center">
              <p className="mb-0 register-link text-lg-right">
                <span>Open hours:</span>
                <span> Monday - Sunday</span>
                <span> 8:00AM - 9:00PM</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;