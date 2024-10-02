import React from "react";
import "./RegistrationPage.css";

const RegistrationPage = () => {
  return (
    <div className="registration">
      <div className="overlap-group">
        <p className="text-wrapper">
          Elevate your hackathon experience with effortless registration, streamlined submissions, and efficient
          judging. Sign in or register to begin.
        </p>
        <p className="hack-a-trek">
          <span className="span">Hack’</span>
          <span className="text-wrapper-2">a</span>
          <span className="span">’Trek</span>
        </p>
        <img className="line" alt="Line" src="line-1.svg" />
        <img className="img" alt="Line" src="line-4.svg" />
        <img className="line-2" alt="Line" src="line-2.svg" />
        <img className="line-3" alt="Line" src="line-3.svg" />
        <input className="text-wrapper-3" type="text" placeholder="Enter your username" />
        <input className="text-wrapper-4" type="email" placeholder="Enter your email" />
        <input className="text-wrapper-5" type="password" placeholder="Enter your password" />
        <input className="text-wrapper-6" type="password" placeholder="Confirm your password" />
        <div className="rectangle"></div>
        <div className="text-wrapper-7">Didn’t register yet?</div>
        <button className="button">
          <button className="button-2">Sign in</button>
        </button>
      </div>
      <div className="navigation-pill-list">
        <div className="navigation-pill" />
        <div className="navigation-pill" />
        <div className="title-wrapper">
          <div className="title">About</div>
        </div>
        <div className="title-wrapper">
          <div className="title">Support</div>
        </div>
        <div className="title-wrapper">
          <div className="title">Contact us</div>
        </div>
      </div>
      <div className="overlap">
        <img className="wallpaper-bg-2" alt="" />
      </div>
    </div>
  );
};

export default RegistrationPage;
