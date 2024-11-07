import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import axios from "axios"; // Import axios for API calls
import whatsappImage from "../../../assets/WhatsApp Image 2024-09-02 at 00.37.22_c865fbb6-Photoroom.png";
import yelloBg from "../../../assets/yellow.svg.png";
import './OrgSignup.css'; // Import the CSS file
import { useNavigate } from "react-router-dom"; // For navigation

export const OrgSignup = () => {
  const [role, setRole] = useState("Organiser"); // State to handle dropdown selection
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  }); // State to handle form data
  const [errorMessage, setErrorMessage] = useState(""); // State to handle error messages
  const navigate = useNavigate(); // For page navigation

  // Handling input changes
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  // Handling dropdown selection
  const handleSelect = (eventKey) => {
    setRole(eventKey);
  };

  // API call to handle signup
  const handleSignup = async () => {
    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match!");
      return;
    }

    // Use the environment variable for the base URL
const BASE_URL = `http://34.93.250.108/api/v1/user`;

// Define the register endpoint path as a variable
const REGISTER_API = `${BASE_URL}/register`;

try {
  // Send a POST request to the register API endpoint
  const response = await axios.post(
    REGISTER_API,
    {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: role,
    }
  );




      if (response.data.success) {
        alert("User Registered Successfully!");
        navigate("/conduct"); // Navigate to conduct page after successful registration
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setErrorMessage(error.response.data.message); // Set error message
      } else {
        setErrorMessage("Something went wrong! Please try again.");
      }
    }
  };

  // Handling login navigation
  const handleLogin = () => {
    navigate("/ologin");

  };

  return (
    <div className="org-login-container">
      {/* Header Section */}
      <header className="org-login-header">
        <nav className="nav-container-signup">
          <Button variant="link" className="nav-button1">About</Button>
          <Button variant="link" className="nav-button1">Support</Button>
          <Button variant="link" className="nav-button1">Project</Button>
        </nav>
        <p>
          <span>Hack’</span>
          <span className="purple-letter-signup">a</span>
          <span>’Trek</span>
        </p>
      </header>

      {/* Main Content */}
      <div className="main-content-osignup">
        <div className="form-container-osignup">
          <p>

            Elevate your hackathon experience with effortless registration, streamlined submissions, and efficient judging. 
            Sign in or organize to begin.

          </p>

          {/* Dropdown for Organiser/Participant */}
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              {role}
            </Dropdown.Toggle>

            <Dropdown.Menu>

              <Dropdown.Item eventKey="Organiser">Organiser</Dropdown.Item>
              <Dropdown.Item eventKey="Participant">Participant</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Form Fields */}
          <label htmlFor="username">Username*</label>
          <input 
            type="text" 
            id="username" 
            placeholder="Enter your username"
            value={formData.username}
            onChange={handleInputChange} 
          />

          <label htmlFor="email">Email Address*</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleInputChange} 
          />

          <label htmlFor="password">Password*</label>
          <input 
            type="password" 
            id="password" 
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleInputChange} 
          />

          <label htmlFor="confirm-password">Confirm Password*</label>
          <input 
            type="password" 
            id="confirmPassword" 
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={handleInputChange} 
          />

          {/* Display error message */}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          {/* Signup Button */}
          <Button variant="primary" className="sign-in-button" onClick={handleSignup}>Sign Up</Button>

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
