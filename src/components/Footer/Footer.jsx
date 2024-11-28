import React from 'react';
import './Footer.css'; // Import custom CSS for footer styling

const Footer = () => {
  return (
    <footer id="footer">
      <div className="left-side">
        <a href="https://www.facebook.com/LABSWorkWorldwide/" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://twitter.com/LABS_Worldwide" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.instagram.com/labs_worldwide/?hl=en" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/company/labsworldwide" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin"></i>
        </a>
      </div>

      <div className="right-side">
        <p className="slova-donja-footer">LABS Office Locations London:</p>
        <br />
        <table>
          <tbody>
            <tr>
              <th>Camden:</th>
              <td><a href="/location/dockray-place/" target="_blank" rel="noopener noreferrer">LABS Dockray Place</a></td>
              <td><a href="/location/labs-lockside/" target="_blank" rel="noopener noreferrer">LABS Lockside</a></td>
              <td><a href="/location/labs-hawley-wharf/" target="_blank" rel="noopener noreferrer">LABS Hawley Wharf</a></td>
              <td><a href="/location/triangle-london/" target="_blank" rel="noopener noreferrer">LABS Triangle</a></td>
              <td><a href="/location/atrium-london/" target="_blank" rel="noopener noreferrer">LABS Atrium</a></td>
            </tr>
            <tr>
              <th>Holborn:</th>
              <td><a href="/location/southampton-place-london/" target="_blank" rel="noopener noreferrer">LABS Southampton Place</a></td>
              <td><a href="/location/hogarth-london/" target="_blank" rel="noopener noreferrer">LABS Hogarth House</a></td>
              <td><a href="/location/labs-90-high-holborn/" target="_blank" rel="noopener noreferrer">LABS 90 High Holborn</a></td>
              <td><a href="/location/labs-house/" target="_blank" rel="noopener noreferrer">LABS House</a></td>
            </tr>
            <tr>
              <th>International:</th>
              <td><a href="https://labstower.cy/" target="_blank" rel="noopener noreferrer">Nicosia, Cyprus</a></td>
            </tr>
            <tr>
              <th>Services:</th>
              <td><a href="/services/coworking/" target="_blank" rel="noopener noreferrer">Roaming</a></td>
              <td><a href="/services/private/" target="_blank" rel="noopener noreferrer">Private</a></td>
              <td><a href="/services/enterprise/" target="_blank" rel="noopener noreferrer">Enterprise</a></td>
              <td><a href="/services/meeting-rooms/" target="_blank" rel="noopener noreferrer">Meeting Rooms</a></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="clear">
        <br />Copyright 2024 © LABS | All Rights Reserved<br />
      </div>
    </footer>
  );
};

export default Footer;
