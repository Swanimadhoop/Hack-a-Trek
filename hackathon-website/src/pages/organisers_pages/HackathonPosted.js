import React from "react";
import "./HackathonPosted.css";
import Button  from "@mui/material/Button";
import { MdAccountCircle } from "react-icons/md";
import Nunny from '../../../src/assets/v823-nunny-16b.jpg';


export const HackathonPosted = () => {
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
              <div class="navigation-posted">
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
            <span className="text-wrapper-2">HACKATHON</span>
            <span className="text-wrapper-3"> POSTED </span>
            <span className="text-wrapper-4">SUCCESSFULLY</span>
            <span className="text-wrapper-3"> ...</span>
            <button className="view-button">View</button>
          </p>


          <div className="group">
          </div>
        </div>
      </div>
    </div>
  );
};
export default HackathonPosted;