import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import "./ThankyouPage.css";
import Button from "@mui/material/Button";
import { MdAccountCircle } from "react-icons/md";
import Nunny from '../../../src/assets/v823-nunny-16b.jpg';

export const ThankyouPage = () => {
  const navigate = useNavigate(); // Initialize navigation

  // Function to handle navigation to the /view page
  const handleViewClick = () => {
    navigate("/viewapplication");
  };

  return (
    <div className="THANKYOU-PAGE">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="yellow">
            <div className="overlap-group">
              <div className="yellow-up" />
            </div>
          </div>
          <div className="home-and-logout">
            <div className="div">
              <div className="navigation-posted">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Support</a>
              </div>
              <Button 
                variant="contained" 
                className="log-out-button-posted" 
                onClick={() => console.log("Logging out")} // Add your logout functionality here
              >
                Log Out
              </Button>
              <MdAccountCircle className="account-circle-posted" />
            </div>
          </div>

          <p className="hack-a-trek">
            <span className="text-wrapper">Hack’</span>
            <span className="purple-posted">a</span>
            <span className="text-wrapper">’Trek</span>
          </p>
          <img className="nunny" alt="Nunny" src={Nunny} />
          <p className="THANKYOU-FOR">
            <span className="text-wrapper-2">THANKYOU</span>
            <span className="text-wrapper-3"> FOR </span>
            <span className="text-wrapper-4">REGISTERING</span>
            <span className="text-wrapper-3"> ...</span>
            <button className="view-button" onClick={handleViewClick}>View</button>
          </p>

          <div className="group">
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
