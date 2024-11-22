import React, { useEffect, useState } from "react";
import "../Loader/Loader.css"; // Import your custom CSS file for the loader

const Loader = () => {
  // State to control loader visibility
  const [loading, setLoading] = useState(true);

  // Hide loader after 2 seconds (simulate loading)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 2000);

    return () => clearTimeout(timer); // Cleanup the timeout if the component unmounts
  }, []);

  return (
    // Conditional rendering based on loading state
    loading && (
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div>
    )
  );
};

export default Loader;
