import React, { useEffect } from "react";
import "./HackathonPosted.css";
import Button from "@mui/material/Button";
import { MdAccountCircle } from "react-icons/md";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import Nunny from "../../../../src/assets/v823-nunny-16b.jpg";

export const HackathonPosted = () => {
  const navigate = useNavigate();
  const { id: hackathonId } = useParams(); // Get hackathon ID from URL
  const location = useLocation();
  const hackathonName = location.state?.hackathonName || "Hackathon"; // Fallback if not in state

  useEffect(() => {
    console.log("Hackathon ID from URL:", hackathonId);
    console.log("Hackathon Name from state:", hackathonName);
  }, [hackathonId, hackathonName]);

  const handleViewClick = () => {
    navigate(`/view/${hackathonId}`, { state: { hackathonName } });
  };

  if (!hackathonId) {
    return <p>Loading... Please wait or try again.</p>;
  }

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
                onClick={() => console.log("Logging out")}
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
            <span className="text-wrapper-2">HACKATHON</span>
            <span className="text-wrapper-3"> POSTED </span>
            <span className="text-wrapper-4">SUCCESSFULLY</span>
            <span className="text-wrapper-3"> ...</span>
          </p>

          <button className="view-button" onClick={handleViewClick}>View</button>

          <div className="group">
          </div>
        </div>
      </div>
    </div>
  );
};

export default HackathonPosted;
