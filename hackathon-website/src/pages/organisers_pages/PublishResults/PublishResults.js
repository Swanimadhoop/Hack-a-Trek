import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import Button from "@mui/material/Button";
import "./PublishResults.css";
import axios from "axios";

export const PublishResults = ({ hackathonId, hackathonName }) => {
  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");

  const handlePublish = async () => {
    // Set BASE_URL to use REACT_APP_SERVER_IP if available, else default to relative path
const BASE_URL = process.env.REACT_APP_SERVER_IP ? `${process.env.REACT_APP_SERVER_IP}/api/v1/hackathon` : '/api/v1/hackathon';
const PUBLISH_RESULTS_API = `${BASE_URL}/publishResults`;

try {
  // Send data to the backend
  const response = await axios.put(PUBLISH_RESULTS_API, {
    _id: hackathonId, // Hackathon ID passed as a prop
    firstPlace,
    secondPlace,
    thirdPlace,
  });
  
  if (response.status === 200) {
    alert("Results published successfully!");
  }
} catch (error) {
  console.error("Error publishing results:", error);
  alert("Failed to publish results. Please try again.");
}

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
          <div className="title-2">{hackathonName}</div> {/* Display hackathon name */}
          <p className="body-text-for">
            Publish Results
            <br />
            <br />
            Enter the team name
          </p>
        </div>

        <div className="results-inputs">
          <input
            type="text"
            className="input-field"
            placeholder="1st (Name and details of the team)"
            value={firstPlace}
            onChange={(e) => setFirstPlace(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="2nd (Name and details of the team)"
            value={secondPlace}
            onChange={(e) => setSecondPlace(e.target.value)}
          />
          <input
            type="text"
            className="input-field"
            placeholder="3rd (Name and details of the team)"
            value={thirdPlace}
            onChange={(e) => setThirdPlace(e.target.value)}
          />
        </div>

        <button className="publish-button" onClick={handlePublish}>
          Publish Results
        </button>
      </div>
    </div>
  );
};

export default PublishResults;
