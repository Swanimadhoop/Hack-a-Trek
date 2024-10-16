import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import whatsappImage from "../../../src/assets/WhatsApp Image 2024-09-02 at 00.37.22_c865fbb6-Photoroom.png";
import yelloBg from "../../../src/assets/yellow.svg.png";
import './PartLogin.css'; // Import the CSS file
import { useNavigate } from "react-router-dom"; // For navigation

export const PartLogin = () => {
  const [role, setRole] = useState("Participant"); // State to handle dropdown selection
  const navigate = useNavigate(); // For page navigation

  const handleSelect = (eventKey) => {
    setRole(eventKey); // Set the selected rohhle
  };

  const handleRegister = () => {
    navigate("/psignup"); // Navigate to OrgSignup page
  };

  return (
    <div className="part-login-container0">
      {/* Header Section */}
      <header className="part-login-header0">
        <nav className="nav-container0">
          <Button variant="link" className="nav-button0">About</Button>
          <Button variant="link" className="nav-button0">Support</Button>
          <Button variant="link" className="nav-button0">Project</Button>
        </nav>
        <p>
          <span>Hack’</span>
          <span className="purple-letter0">a</span>
          <span>’Trek</span>
        </p>
      </header>

      {/* Main Content */}
      <div className="main-content0">
        <div className="form-container0">
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
              <Dropdown.Item eventKey="Organiser">Organiser</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <label htmlFor="email">Email Address*</label>
          <input type="email" id="email" placeholder="Enter your email" />

          <label htmlFor="password">Password*</label>
          <input type="password" id="password" placeholder="Enter your password" />

          <Button variant="primary" className="sign-in-button0">Sign In</Button>

          <p className="register-text0">
            New User? <Button variant="link" className="nav-button0" onClick={handleRegister}>Register</Button>
          </p>
        </div>
      </div>

      <img alt="Whatsapp image0" src={whatsappImage} className="whatsapp-image0" />

      {/* Yellow Background Image */}
      <img alt="Yellow Background0" src={yelloBg} className="yello-bg-image0" />
    </div>
  );
};

export default PartLogin;
