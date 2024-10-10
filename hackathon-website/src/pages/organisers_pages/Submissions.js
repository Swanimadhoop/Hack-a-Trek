import React, { useState, useEffect } from "react";
import { MdAccountCircle } from "react-icons/md";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import "./Submissions.css";

export const Submissions = () => {
  const [timeLeft, setTimeLeft] = useState(200); // Set initial timer (e.g., 10 seconds)
  const [autoEnd, setAutoEnd] = useState(false); // State to handle auto-end option
  const navigate = useNavigate(); // Initialize navigation

  // Countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          if (autoEnd) {
            // Navigate to /endsubmission if auto-end is enabled
            navigate("/endsubmission");
          } else {
            navigate("/end"); // Navigate to /end if auto-end is not enabled
          }
        }
        return prevTime - 1;
      });
    }, 1000); // Update every second

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, [navigate, autoEnd]);

  // Toggle auto-end functionality
  const toggleAutoEnd = () => {
    setAutoEnd((prevAutoEnd) => !prevAutoEnd);
  };

  return (
    <div className="winners-list">
      <div className="overlap">
        <div className="yellow-up" />
        <div className="home-and-logout">
          <div className="navigation-publish">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Support</a>
          </div>
          <Button
            variant="contained"
            className="log-out-button-publish"
            onClick={() => console.log("Logging out")}
          >
            Log Out
          </Button>
          <MdAccountCircle className="account-circle-publish" />
          <p className="hack-a-trek-publish">
            <span className="span">Hack’</span>
            <span className="purple">a</span>
            <span className="span">’Trek</span>
          </p>
        </div>

        <div className="text">
          <div className="title-2">Hackathon Name</div>
          <div className="titls-4">Hackathon started</div>
          <div className="title-3">Project Submissions</div>
          <a className="link-submission" href="feedback">
            <p className="p">1 (Team Name)</p>
          </a>
          <a className="link-submission" href="#second-place">
            <p className="text-wrapper-4">2 (Team Name)</p>
          </a>
          <a className="link-submission" href="#third-place">
            <p className="text-wrapper-3">3 (Team Name )</p>
          </a>
        </div>

        {/* Timer */}
        <div className="timer">
          <p>Time remaining: {timeLeft} seconds</p>
        </div>

        {/* Auto-end Toggle */}
        <div className="auto-start-toggle">
          <Button
            variant="contained"
            color={autoEnd ? "success" : "secondary"}
            onClick={toggleAutoEnd}
          >
            {autoEnd ? "Auto-end Enabled" : "Enable Auto-end"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Submissions;
