import React, { useState, useEffect } from "react";
import { MdAccountCircle, MdDownload } from "react-icons/md";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./ViewHackathon.css";

export const ViewHackathon = () => {
  const [timeLeft, setTimeLeft] = useState(200); // Set timer (e.g., 15 minutes)
  const [autoStart, setAutoStart] = useState(false); // State to handle auto-start option
  const navigate = useNavigate(); // Initialize navigation

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          if (autoStart) {
            navigate("/submission"); // Redirect to /submission when auto-start is enabled
          } else {
            navigate("/start"); // Redirect to /start when auto-start is not enabled
          }
        }
        return prevTime - 1;
      });
    }, 1000); // Update every second

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, [navigate, autoStart]);

  // Toggle auto-start functionality
  const toggleAutoStart = () => {
    setAutoStart((prevAutoStart) => !prevAutoStart);
  };

  return (
    <div className="start-hackathon-page">
      {/* Header */}
      <div className="header">
        <div className="navigation-start">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
        </div>
        <Button
          variant="contained"
          className="log-out-button-start"
          onClick={() => console.log("Logging out")}
        >
          Log Out
        </Button>
        <MdAccountCircle className="account-icon-start" />
      </div>

      {/* Main Content */}
      <div className="main-content">
        <p className="hack-a-trek-start">
          <span>Hack’</span>
          <span className="purple-start">a</span>
          <span>’Trek</span>
        </p>

        {/* Hackathon Info */}
        <div className="hackathon-info">
          <div className="hackathon-name">
            <p>Hackathon Name -</p>
          </div>

          <div className="details-box-start">
            <p>Details</p>
          </div>
        </div>

        {/* Participant List */}
        <div className="participant-list-container">
          <div className="participant-list">
            <p>Participant list</p>
            <MdDownload className="download-icon" />
          </div>
        </div>

        {/* Timer */}
        <div className="timer">
          <p>Time remaining: {timeLeft} seconds</p>
        </div>

        {/* Auto-start Toggle */}
        <div className="auto-start-toggle">
          <Button
            variant="contained"
            color={autoStart ? "success" : "secondary"}
            onClick={toggleAutoStart}
          >
            {autoStart ? "Auto-start Enabled" : "Enable Auto-start"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ViewHackathon;
