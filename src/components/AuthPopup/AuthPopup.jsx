import React, { useState } from "react";
import "./AuthPopup.css"; // Import the CSS for styling

const AuthPopup = () => {
  const [isLogin, setIsLogin] = useState(true); // Manage login vs. registration toggle state

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between login and registration form
  };

  return (
    <div className="auth-popup-container">
      <div className="auth-popup">
        <div className="auth-popup-header">
          <h2>{isLogin ? "Login" : "Register"}</h2>
          <span className="toggle" onClick={toggleForm}>
            {isLogin ? "Create an Account" : "Already have an account?"}
          </span>
        </div>
        <form className="auth-form">
          {isLogin ? (
            <>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
              </div>
              <button type="submit" className="auth-btn">Login</button>
            </>
          ) : (
            <>
              <div className="input-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Confirm Password" required />
              </div>
              <button type="submit" className="auth-btn">Register</button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default AuthPopup;
