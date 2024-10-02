import React from "react";
import { MdAccountCircle, MdDownload } from "react-icons/md";
import Button from "@mui/material/Button";
import "./StartHackathon.css";

export const StartHackathon = () => {
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
            <p>Details </p>
          </div>
          
          <button className="start-hackathon-button">
            Start Hackathon
          </button>
          
        </div>

        {/* Participant List */}
        <div className="participant-list-container">
          <div className="participant-list">
            <p>Participant list</p>
            <MdDownload className="download-icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHackathon;
