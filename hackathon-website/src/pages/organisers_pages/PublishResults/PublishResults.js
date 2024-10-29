import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import Button from "@mui/material/Button";
import "./PublishResults.css";

export const PubishResults = () => {
  const [firstPlace, setFirstPlace] = useState("");
  const [secondPlace, setSecondPlace] = useState("");
  const [thirdPlace, setThirdPlace] = useState("");

  const handlePublish = () => {
    // Handle the publish logic here (e.g., sending the results to the server)
    alert(`Results Published!\n1st: ${firstPlace}\n2nd: ${secondPlace}\n3rd: ${thirdPlace}`);
  };

  return (
    <div className="winners-list">
      {/* <div className="div"> */}
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
            <div className="title-2">hackathon name </div>
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
    // </div>
  );
};

export default PubishResults;
