import React from "react";
import { MdDownload, MdAccountCircle } from "react-icons/md";
import Button from "@mui/material/Button";
import "./Feedback.css";

export const Feedback = () => {
  return (
    <div className="feedback-page">
      <div className="top-bar">
        <div className="yellow-bar" />
        <div className="header">
          <div className="navigation-feedback">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Support</a>
          </div>
          <Button 
            variant="contained" 
            className="log-out-button-feedback" 
            onClick={() => console.log("Logging out")}
          >
            Log Out
          </Button>
          <MdAccountCircle className="account-circle-posted" />
        </div>
        <p className="hack-a-trek-feedback">
          <span>Hack’</span>
          <span className="purple">a</span>
          <span>’Trek</span>
        </p>
      </div>

      <div className="content">
        <div className="team-info">
          <p>Team Name -</p>
        </div>

        <div className="Project-idea">
          <p>Project Idea</p>
        </div>
          

        <div className="project-download">
          <p>Download Project</p>
          <MdDownload className="download-icon" />
        </div>

      <div className="details-box">
        <p>Details of team</p>
      </div>  


      <div className="feedback-section">
        <p>Feedback:</p>
        <textarea className="feedback-input" placeholder="Enter your feedback here..."></textarea>
        <div className="save-button" onClick={() => console.log("Saving feedback")}>
          Save
        </div>
      </div>
      </div>
    </div>
  );
};

export default Feedback;
