import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./EndSubmission.css";

export const EndSubmissions = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle Publish Result button click
  const handlePublishResult = () => {
    // Navigate to /publish page
    navigate("/publish");
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
          <div className="title-3">Project Submissions</div>
          <a className="link-submission" href="feedback">
            <p className="p">1 (Team Name)</p>
          </a>
          <a className="link-submission" href="#second-place">
            <p className="text-wrapper-4">2 (Team Name)</p>
          </a>
          <a className="link-submission" href="#third-place">
            <p className="text-wrapper-3">3 (Team Name)</p>
          </a>
          <p className="hackathon-ended">Hackathon Ended</p>

          {/* Publish Result Button */}
          <Button 
            variant="contained" 
            className="publish-result-button" 
            onClick={handlePublishResult}
          >
            Publish Result
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EndSubmissions;
