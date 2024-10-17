import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import axios from "axios"; // Import axios for making HTTP requests

import "./ConductHackathon.css";
import yelloBg from "../../../../src/assets/yellow.svg.png";
import { MdAccountCircle } from "react-icons/md";

const ConductHackathon = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  // State to store form data
  const [organisationName, setOrganisationName] = useState("");
  const [organisationEmail, setOrganisationEmail] = useState("");
  const [hackathonName, setHackathonName] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // To handle errors
  const [successMessage, setSuccessMessage] = useState(""); // To handle success messages

  // Function to handle icon click and navigate to the profile page
  const handleIconClick = () => {
    navigate("/oprofile"); // Replace '/oprofile' with the correct path for your organizer profile page
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    try {
      // Reset any previous messages
      setErrorMessage("");
      setSuccessMessage("");

      // Make a POST request to the backend API
      const response = await axios.post("http://localhost:4000/api/v1/hackathon/createhackathon", {
        orgName: organisationName,
        orgEmail: organisationEmail,
        hackathonName: hackathonName,
      });

      // Handle success - clear form and show success message
      const { _id } = response.data; // Assuming the response contains the created hackathon ID
      setOrganisationName("");
      setOrganisationEmail("");
      setHackathonName("");
      setSuccessMessage("Hackathon created successfully!");

      // Navigate to the next page after a short delay to show success message
      setTimeout(() => {
        navigate("/detailsfill", { state: { hackathonName, _id } }); // Pass both hackathonName and _id
      }, 2000); // Delay for 2 seconds
    } catch (error) {
      // Handle error and show error message
      setErrorMessage(error.response?.data?.message || "Failed to create hackathon. Please try again.");
    }
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
            <form onSubmit={handleSubmit}>
              <label htmlFor="organisationName">Organisation Name</label>
              <input 
                type="text" 
                id="organisationName" 
                placeholder="Enter your organisation name" 
                value={organisationName} 
                onChange={(e) => setOrganisationName(e.target.value)} 
                required
              />

              <label htmlFor="organisationEmail">Organisation Email</label>
              <input 
                type="email" 
                id="organisationEmail" 
                placeholder="Enter your organisation email" 
                value={organisationEmail} 
                onChange={(e) => setOrganisationEmail(e.target.value)} 
                required
              />

              <label htmlFor="hackathonName">Hackathon Name</label>
              <input 
                type="text" 
                id="hackathonName" 
                placeholder="Enter your hackathon name" 
                value={hackathonName} 
                onChange={(e) => setHackathonName(e.target.value)} 
                required
              />

              <button className="buttons" type="submit">Conduct Hackathon</button>
            </form>

            {/* Display success or error messages */}
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>

          <img alt="Yellow Background" src={yelloBg} className="yello-bg-image-conduct" />
        </div>
      </div>
    </div>
  );
};

export default ConductHackathon;