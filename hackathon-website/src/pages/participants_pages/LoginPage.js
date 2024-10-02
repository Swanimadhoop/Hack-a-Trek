import React, { useState } from "react";
import "./LoginPage.css"; // Ensure correct path
import whatsappImage from '../../../src/assets/WhatsApp Image 2024-09-02 at 00.37.22_c865fbb6-Photoroom.png';

const LandingPage = () => {
  const [showRegisterDropdown, setShowRegisterDropdown] = useState(false);
  const [showOrganiserDropdown, setShowOrganiserDropdown] = useState(false);

  const toggleRegisterDropdown = () => setShowRegisterDropdown(!showRegisterDropdown);
  const toggleOrganiserDropdown = () => setShowOrganiserDropdown(!showOrganiserDropdown);

  return (
    <div className="landing-page">
      {/* WhatsApp Image Section */}
      <div className="whatsapp-image-container">
        <img
          className="whatsapp-image"
          alt="WhatsApp Hackathon"
          src={whatsappImage}
        />
      </div>

      {/* Hack a Trek Heading and Description */}
      <div className="hack-a-trek-section">
        <h1 className="hack-a-trek-title">Hack’a’Trek</h1>
        <p className="hack-a-trek-description">
          Elevate your hackathon experience with effortless registration, streamlined submissions, and efficient judging. Sign in or organize to begin.
        </p>
      </div>

      {/* Organiser and Register as Dropdowns */}
      <div className="dropdown-section">
        {/* Organiser Dropdown */}
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleOrganiserDropdown}>
            <div className="title-2">Organiser</div>
            <div className={`dropdown-arrow ${showOrganiserDropdown ? 'open' : ''}`} />
          </div>
          {showOrganiserDropdown && (
            <div className="dropdown-content">
              <div className="dropdown-option">Organiser</div>
              <div className="dropdown-option">Participant</div>
            </div>
          )}
        </div>

        {/* Register as Dropdown */}
        <div className="accordion-item">
          <div className="accordion-title" onClick={toggleRegisterDropdown}>
            <div className="title-2">Register as</div>
            <div className={`dropdown-arrow ${showRegisterDropdown ? 'open' : ''}`} />
          </div>
          {showRegisterDropdown && (
            <div className="dropdown-content">
              <div className="dropdown-option">Register as</div>
              <div className="dropdown-option">Login as</div>
            </div>
          )}
        </div>
      </div>

      {/* Input Fields Section */}
      <div className="input-fields-section">
        {/* Email Input */}
        <div className="input-section">
          <label htmlFor="email" className="input-label">Email Address*</label>
          <input type="email" id="email" className="input-field" placeholder="Enter your email" />
        </div>

        {/* Password Input */}
        <div className="input-section">
          <label htmlFor="password" className="input-label">Password*</label>
          <input type="password" id="password" className="input-field" placeholder="Enter your password" />
        </div>
      </div>

      {/* Login/Register Button */}
      <div className="button-section">
        <button className="login-register-button">
          Login / Register
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
