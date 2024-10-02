import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import "./ConductHackathon.css";
import yelloBg from "../../../src/assets/yellow.svg.png";
import { MdAccountCircle } from "react-icons/md";

const ConductHackathon = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // Function to handle icon click and navigate to the profile page
  const handleIconClick = () => {
    navigate("/oprofile"); // Replace '/oprofile' with the correct path for your organizer profile page
  };

  return (
    <div className="registration">
      <div className="overlap-group">
        <nav className="nav-container1">
          <Button variant="link" className="nav-button0">About</Button>
          <Button variant="link" className="nav-button0">Support</Button>
          <Button variant="link" className="nav-button0">Project</Button>
        </nav>
        
        <p className="text-wrapper">
          "Welcome to Hack' a Trek! As an organizer, you have the power to shape extraordinary experiences. 
          Let’s launch your next hackathon and ignite innovation together!"
        </p>

        {/* Add an onClick handler to the account icon */}
        <MdAccountCircle className="account-circle-conduct" onClick={handleIconClick} />

        <p className="hack-a-trek">
          <span className="span">Hack’</span>
          <span className="text-wrapper-2">a</span>
          <span className="span">’Trek</span>
        </p>

        <div className="form-container">
          <div className="rectangle conduct-hackathon-form">
            <label htmlFor="organisationName">Organisation Name</label>
            <input type="text" id="organisationName" placeholder="Enter your organisation name" />

            <label htmlFor="organisationEmail">Organisation Email</label>
            <input type="email" id="organisationEmail" placeholder="Enter your organisation email" />

            <label htmlFor="hackathonName">Hackathon Name</label>
            <input type="text" id="hackathonName" placeholder="Enter your hackathon name" />

            <button className="buttons">Conduct Hackathon</button>
          </div>
          <img alt="Yellow Background" src={yelloBg} className="yello-bg-image-conduct" />
        </div>
      </div>
    </div>
  );
};

export default ConductHackathon;
