import React, { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import Button from "@mui/material/Button"; // Importing Material-UI Button
import "./DetailsFillPage.css";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const DetailsFillPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const hackathonName = location.state?.hackathonName; // Get hackathon name
  const _id = location.state?._id; // Get hackathon ID

  // Debugging: Log location state and hackathon details
  useEffect(() => {
    console.log("Location state:", location.state); // Check what exactly is in location.state
    console.log("Hackathon ID:", _id); // Should log: 66fe923a3fff91a33ed4b269
    console.log("Hackathon Name:", hackathonName); // Check if hackathonName is also being passed
  }, [location.state]);

  const [formData, setFormData] = useState({
    lastDayToApply: "",
    dateOfEvent: "",
    modeOfEvent: "online",
    description: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Log form data for debugging
    console.log("Submitting the following data:", {
      _id,
      ...formData,
    });

    // Use the environment variable for the base URL
const BASE_URL = `http://34.93.250.108/api/v1/hackathon`;

// Define the endpoint path as a variable
const UPDATE_HACKATHON_API = `${BASE_URL}/updateHackathonDetails`;

try {
  const response = await axios.put(
    UPDATE_HACKATHON_API,
    {
      _id, // Pass hackathon ID
      ...formData, // Pass form data
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );



      console.log("Hackathon updated successfully:", response.data);
      alert("Hackathon updated successfully!"); // Display success message


      // Navigate to the /posted page on successful update
      // navigate("/posted"); // Redirect to the /posted page
      navigate(`/posted/${_id}`, { state: { hackathonName } });
      


      // Optionally reset the form state
      setFormData({
        lastDayToApply: "",
        dateOfEvent: "",
        modeOfEvent: "online",
        description: "",
      });
    } catch (error) {
      console.error("Error updating hackathon:", error.response); // Log the actual error response
      alert(
        "Error updating hackathon: " +
          (error.response?.data.message || "An error occurred")
      );
    }
  };

  return (
    <div className="hackathon-details">
      <div className="yellow-up" />
      <nav className="home-and-logout">
        <div className="navigation">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
        </div>
        <Button
          variant="contained"
          className="log-out-button"
          onClick={() => console.log("Logging out")} // Add your logout functionality here
        >
          Log Out
        </Button>
      </nav>

      <MdAccountCircle className="account-circle" />
      <p className="hack-a-trek-details">
        <span className="span">Hack’</span>
        <span className="text-wrapper-2">a</span>
        <span className="span">’Trek</span>
      </p>

      <div className="form-section">
        <label className="form-label">
          <strong>{hackathonName}</strong> {/* Display the hackathon name */}
        </label>

        <form onSubmit={handleSubmit}> {/* Form submission handling */}
          <div className="form-group">
            <label>Last Day to Apply:</label>
            <input
              type="date"
              name="lastDayToApply"
              value={formData.lastDayToApply}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Date of Event:</label>
            <input
              type="date"
              name="dateOfEvent"
              value={formData.dateOfEvent}
              onChange={handleInputChange}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label>Mode of Event:</label>
            <select
              name="modeOfEvent"
              value={formData.modeOfEvent}
              onChange={handleInputChange}
              className="form-select"
            >
              <option value="online">Online</option>
              <option value="offline">Offline</option>
            </select>
          </div>

          <div className="form-group">
            <label>Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="form-textarea"
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Post Hackathon
          </button>
        </form>
      </div>
    </div>
  );
};

export default DetailsFillPage;
