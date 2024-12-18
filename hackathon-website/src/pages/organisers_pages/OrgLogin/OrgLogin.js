import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import axios from "axios";  // Import axios for making API requests
import whatsappImage from "../../../assets/WhatsApp Image 2024-09-02 at 00.37.22_c865fbb6-Photoroom.png";
import yelloBg from "../../../assets/yellow.svg.png";
import './OrgLogin.css'; // Import the CSS file
import { useNavigate } from "react-router-dom"; // For navigation

export const OrgLogin = () => {
  const [role, setRole] = useState("Organiser"); // State to handle dropdown selection
  const [email, setEmail] = useState("");        // State for email input
  const [password, setPassword] = useState("");  // State for password input
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const navigate = useNavigate();                // For page navigation
  const handleSelect = (eventKey) => {
    setRole(eventKey); // Set the selected role
  };

  const handleRegister = () => {
    navigate("/osignup"); // Navigate to OrgSignup page
  };


  // Function to handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    // Use the environment variable for the base URL
const BASE_URL = `http://34.93.250.108/api/v1/user`;

// Define the login endpoint path as a variable
const LOGIN_API = `${BASE_URL}/login`;

try {
  // Send a POST request to the login API endpoint
  const response = await axios.post(
    LOGIN_API,
    {
      email,
      password,
      role,
    },
    { withCredentials: true }
  );



      if (response.data.success) {
        // If login is successful, navigate to another page (e.g., dashboard)
        alert(response.data.message); // Show success message
        navigate("/conduct");       // Navigate to the dashboard or desired page
      }
    } catch (error) {
      // If an error occurs, set the error message to display
      setErrorMessage(error.response.data.message || "Login failed!");
    }
  };


  return (
    <div className="org-login-container0">
      {/* Header Section */}
      <header className="org-login-header0">
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

export default OrgLogin;
