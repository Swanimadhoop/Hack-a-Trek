import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import axios from "axios";  // Import axios for making API requests
import whatsappImage from "../../../../src/assets/WhatsApp Image 2024-09-02 at 00.37.22_c865fbb6-Photoroom.png";
import yelloBg from "../../../../src/assets/yellow.svg.png";
import './PartLogin.css'; // Import the CSS file
import { useNavigate } from "react-router-dom"; // For navigation

export const PartLogin = () => {
  const [role, setRole] = useState("participant");  // Default role is Participant
  const [email, setEmail] = useState("");           // State for email input
  const [password, setPassword] = useState("");     // State for password input
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();                   // For page navigation

  // Handle role selection (Participant/Organiser)
  const handleSelect = (eventKey) => {
    setRole(eventKey);  // Update role based on selection
  };

  // Handle form registration navigation
  const handleRegister = () => {
    navigate("/psignup"); // Navigate to Participant Signup page
  };

  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    try {
      // Send a POST request to your login API endpoint
      const response = await axios.post("http://localhost:4000/api/v1/user/login", {
        email,
        password,
        role,
      }, { withCredentials: true });

      if (response.data.success) {
        // If login is successful, navigate to another page (e.g., participant dashboard)
        alert(response.data.message); // Show success message
        navigate("/home");       // Navigate to the dashboard or desired page
      }
    } catch (error) {
      // If an error occurs, set the error message to display
      setErrorMessage(error.response?.data?.message || "Login failed! Please try again.");
    }
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
              <Dropdown.Item eventKey="Organiser">Organiser</Dropdown.Item>
              <Dropdown.Item eventKey="Participant">Participant</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          {/* Display error message if login fails */}
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

          {/* Email Input */}
          <label htmlFor="email">Email Address*</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // Update email state
          />

          {/* Password Input */}
          <label htmlFor="password">Password*</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // Update password state
          />

          {/* Login Button */}
          <Button variant="primary" className="sign-in-button0" onClick={handleLogin}>
            Sign In
          </Button>

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