import React from "react";
import { MdAccountCircle } from "react-icons/md"; // Assuming this is still needed
import "./AppliedHackathon.css";

export const AppliedHackathon = () => {
  return (
    <div className="application-page">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <div className="yellow">
              <div className="div">
                <div className="yellow-up" />
              </div>
            </div>
            <div className="home-and-logout">
              <div className="overlap-2">
                <div className="home-abt-supp">
                  <div className="navigation-pill-list">
                    <div className="navigation-pill-2" />
                    <div className="navigation-pill-instance">Home</div>
                    <div className="navigation-pill-instance">About</div>
                    <div className="navigation-pill-instance">Support</div>
                    <div className="navigation-pill-instance" />
                  </div>
                </div>
                <div className="log-out">
                  <div className="logout">Log out</div>
                </div>
              </div>
            </div>
            <MdAccountCircle className="Mdaccount-circle" />
            <div className="text">{""}</div>
            <img className="group" alt="Group" src="group-48.png" />
            <p className="hack-a-trek">
              <span className="text-wrapper">Hack’</span>
              <span className="span">a</span>
              <span className="text-wrapper">’Trek</span>
            </p>
            <div className="rectangle" />
            <div className="hackathon-idea">Hackathon idea&nbsp;&nbsp;&nbsp;&nbsp; :</div>
            <div className="rectangle-2" />
            <div className="overlap-group-wrapper">
              <div className="overlap-3">
                <div className="rectangle-3" />
                <div className="group-2">
                  <p className="p">
                    <span className="text-wrapper">Hack’</span>
                    <span className="span">a</span>
                    <span className="text-wrapper">’Trek</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-4">
                <p className="team-name-team">
                  Team Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  <br />
                  <br />
                  Team Leader&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;
                  <br />
                  <br />
                  Email Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <br />
                  <br />
                  Member&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <br />
                  <br />
                  Email Id&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                </p>
              </div>
            </div>
            <div className="text-wrapper-2">Add more +</div>
            <button className="button-instance">Register</button>
          </div>
          <div className="overlap-5">
            <div className="rectangle-4" />
            <div className="hackathon-name">(hackathon name &amp; details)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedHackathon; 
