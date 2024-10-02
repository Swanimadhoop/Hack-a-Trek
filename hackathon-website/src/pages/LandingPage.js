import React, { useState } from "react";
import { Dropdown, Button } from "react-bootstrap";
import whatsappImage from "../assets/WhatsApp Image 2024-09-02 at 00.37.22_c865fbb6-Photoroom.png";
import yelloBg from "../assets/yellow.svg.png";
import './LandingPage.css'; // Import the CSS file
import { useNavigate } from "react-router-dom"; // For navigation

export const LandingPage = () => {
    const [role, setRole] = useState("Select Role"); // State to handle dropdown selection
    const [roleSelected, setRoleSelected] = useState(false); // State to check if a role is selected
    const navigate = useNavigate(); // For page navigation

    const handleSelect = (eventKey) => {
        setRole(eventKey); // Set the selected role
        setRoleSelected(true); // Role is selected, enable buttons
    };

    const handleRegister = () => {
        if (roleSelected) {
            navigate("/osignup"); // Navigate to OSignup page
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
                            <Dropdown.Item eventKey="Organiser">Organiser</Dropdown.Item>
                            <Dropdown.Item eventKey="Participant">Participant</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* Warning Message */}
                    {!roleSelected && <p className="warning-message">Please select a role to continue.</p>}

                    <label htmlFor="email">Email Address*</label>
                    <input type="email" id="email" placeholder="Enter your email" disabled={!roleSelected} />

                    <label htmlFor="password">Password*</label>
                    <input type="password" id="password" placeholder="Enter your password" disabled={!roleSelected} />

                    {/* Sign In Button */}
                    <Button variant="primary" className="sign-in-button0" disabled={!roleSelected}>Sign In</Button>

                    <p className="register-text0">
                        New User?{" "}
                        <Button
                            variant="link"
                            className="nav-button0"
                            onClick={handleRegister} // Call handleRegister function on click
                            disabled={!roleSelected} // Disable if no role is selected
                        >
                            Register
                        </Button>
                    </p>
                </div>
            </div>

            <img alt="Whatsapp image" src={whatsappImage} className="whatsapp-image" />

            {/* Yellow Background Image */}
            <img alt="Yellow Background" src={yelloBg} className="yello-bg-image" />
        </div>
    );
};

export default LandingPage;
