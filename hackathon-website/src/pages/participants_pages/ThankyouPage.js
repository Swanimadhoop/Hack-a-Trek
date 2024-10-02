import React from "react";
import "./ThankyouPage.css";
import Nunny from 'C:\\Users\\swani\\OneDrive\\Desktop\\hackathon\\hackathon-website\\src\\assets\\v823-nunny-16b.jpg';


export const ThankyouPage = () => {
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
              <div className="home-abt-supp">
                <div className="navigation-pill-list">
                  <div className="navigation-pill-2" />
                  <div className="navigation-pill-instance">Home</div>
                  <div className="navigation-pill-instance">About</div>
                  <div className="navigation-pill-instance">Support</div>
                </div>
              </div>
              <div className="log-out">
                <div className="logout">Log out</div>
              </div>
            </div>
          </div>
          <p className="hack-a-trek">
            <span className="text-wrapper">Hack’</span>
            <span className="span">a</span>
            <span className="text-wrapper">’Trek</span>
          </p>
          <img className="nunny" alt="Nunny" src={Nunny} />
          <p className="THANKYOU-FOR">
            <span className="text-wrapper-2">THANKYOU</span>
            <span className="text-wrapper-3"> FOR </span>
            <span className="text-wrapper-4">REGISTERING</span>
            <span className="text-wrapper-3"> ...</span>
          </p>
          <div className="group">
            <img className="icon" alt="Icon" src="icon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThankyouPage;