import React from "react";
import { MdAccountCircle } from "react-icons/md";
import Button from "@mui/material/Button";
import "./OrganiserProfile.css";

export const OrganiserProfile = () => {
  return (
    <div className="organiser-login">
      <div className="organisers-profile-wrapper">
        <div className="organisers-profile">
          <div className="overlap">
            {/* Yellow Background or Banner */}
            <div className="yellow" />

            {/* Header Section with Navigation Links and Logout */}
            <div className="home-and-logout">
              <div className="overlap-group">
                <div className="navigation-oprofile">
                  <a href="#">Home</a>
                  <a href="#">About</a>
                  <a href="#">Support</a>
                </div>

                <Button
                  variant="contained"
                  className="log-out-button-oprofile"
                  onClick={() => console.log("Logging out")}
                >
                  Log Out
                </Button>

                <MdAccountCircle className="account-circle-oprofile" />

                <p className="hack-a-trek-oprofile">
                  <span className="span">Hack’</span>
                  <span className="purple">a</span>
                  <span className="span">’Trek</span>
                </p>
              </div>
            </div>
          </div>

          {/* Profile Information */}
          <div className="Name-and-designation">
            <p>Name</p>
            <p>Designation</p>
          </div>

          {/* About Me Section */}
          <div className="overlap-5">
            <div className="text-wrapper-4">About me</div>

            <div className="write-about-me-rectangle">
              <p>Write about me</p>
            </div>
          </div>

          {/* Hackathons Section */}
          <div className="overlap-4">
            <div className="frame">
              <div className="yellow-up" />
            </div>

            <p className="previously-conducted">
            <span className="text-wrapper-2-oprofile">Previous <br /></span>
            <span className="text-wrapper-3-oprofile">Hackathons</span>
            </p>

            <p className="running-hackathons">
              <span className="text-wrapper-2-oprofile">Running <br /></span>
              <span className="text-wrapper-3-oprofile">Hackathons</span>
            </p>

            <p className="upcoming-hackathons">
              <span className="text-wrapper-2-oprofile">Upcoming <br /></span>
              <span className="text-wrapper-3-oprofile">Hackathons</span>
            </p>

            {/* Rectangles Representing Hackathons */}
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />

            {/* Continue with other rectangle divs as needed... */}
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default OrganiserProfile;
