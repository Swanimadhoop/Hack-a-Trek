import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import whatsappImage from "../../../src/assets/WhatsApp Image 2024-09-02 at 00.37.22_c865fbb6-Photoroom.png";
import yelloBg from "../../../src/assets/yellow.svg.png";
import './OrgSignup.css'; // Import the CSS file
import { useNavigate } from "react-router-dom"; // For navigation

export const OrgSignup = () => {
  const [role, setRole] = useState("Organiser"); // State to handle dropdown selection
  const navigate = useNavigate(); // For page navigation

  const handleSelect = (eventKey) => {
    setRole(eventKey); // Set the selected role
  };

  const handleLogin = () => {
    navigate("/ologin"); // Navigate to OLogin page
  };

  return (
    <div className="org-login-container">
      {/* Header Section */}
      <header className="org-login-header">
        <nav className="nav-container">
          <Button variant="link" className="nav-button1">About</Button>
          <Button variant="link" className="nav-button1">Support</Button>
          <Button variant="link" className="nav-button1">Project</Button>
        </nav>
        <p>
          <span>Hack’</span>
          <span className="purple-letter">a</span>
          <span>’Trek</span>
        </p>
      </header>

      {/* Main Content */}
      <div className="main-content">
        <div className="form-container">
          <p>
            Elevate your hackathon experience with effortless registration, streamlined submissions, and efficient
            judging. Sign in or organize to begin.
          </p>

          {/* Dropdown for Organiser/Participant */}
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {role}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {/* <Dropdown.Item eventKey="Organiser">Organiser</Dropdown.Item> */}
              <Dropdown.Item eventKey="Participant">Participant</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          
          <label htmlFor="username">Username*</label>
          <input type="text" id="username" placeholder="Enter your username" />

          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password*</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <label htmlFor="confirm-password">Confirm Password*</label>
          <input type="password" id="confirm-password" placeholder="Confirm your password" />

          <Button variant="primary" className="sign-in-button">Sign Up</Button>

          <p className="register-text">
            Already a User? <Button variant="link" className="nav-button" onClick={handleLogin}>Login</Button>
          </p>
        </div>
      </div>

      <img alt="Whatsapp image" src={whatsappImage} className="whatsapp-image" />

      {/* Yellow Background Image */}
      <img alt="Yellow Background" src={yelloBg} className="yello-bg-image" />
    </div>
  );
};

export default OrgSignup;
