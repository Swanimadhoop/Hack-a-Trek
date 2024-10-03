import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import Button from '@mui/material/Button'; // Importing Material-UI Button
import "./DetailsFillPage.css";
import { useLocation } from "react-router-dom";

export const DetailsFillPage = () => {
  const location=useLocation();
  const hackathonName=location.state?.hackathonName;
  const [formData, setFormData] = useState({
    lastDayToApply: "",
    dateOfEvent: "",
    modeOfEvent: "online",
    description: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="hackathon-details">
      <div className="yellow-up" />
      <nav className="home-and-logout">
      <div class="navigation">
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
        <label className="form-label"><label className="form-label"> <strong>{hackathonName}</strong></label> {/* Display the hackathon name */}
        </label>


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

        <button className="submit-button">Post Hackathon</button>
      </div>
    </div>
  );
};

export default DetailsFillPage;




