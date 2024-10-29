import React from "react";
import { MdAccountCircle } from "react-icons/md"
import "./WinnersPage.css";

export const WinnersPage = () => {
  return (
    <div className="winners-list">
      <div className="div">
        <div className="overlap">
          <div className="yellow-up" />
          <div className="home-and-logout">
            <div className="overlap-group">
              <div className="home-abt-supp">
                <div className="navigation-pill-list">
                  <div className="navigation-pill" />
                  <div className="title-wrapper">
                    <div className="title">Home</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title">About</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="title">Support</div>
                  </div>
                  <div className="title-wrapper">
                    <div className="text-wrapper">{""}</div>
                  </div>
                </div>
              </div>
              <div className="log-out">
                <div className="logout">Log out</div>
              </div>
            </div>
          </div>
          <MdAccountCircle className="account-circle" />
          <p className="hack-a-trek">
            <span className="span">Hack’</span>
            <span className="span">a</span>
            <span className="span">’Trek</span>
          </p>
        </div>
        <div className="text">
          <div className="title-2">NHSF 2024/03 RESULTS</div>
          <p className="body-text-for">
            We have enjoyed trying out every single submission
            <br />
            we have received! <br />
            You can find the results now.
          </p>
        </div>
        <p className="p">1st (Name and details of the team)</p>
        <p className="text-wrapper-4">2nd (Name and details of the team)</p>
        <p className="text-wrapper-3">3rd (Name and details of the team)</p>
      </div>
    </div>
  );
};
export default WinnersPage;