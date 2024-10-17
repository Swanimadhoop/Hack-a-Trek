import React from "react";
import { MdAccountCircle } from "react-icons/md";
import "./MyProjects.css"

// Define the Button component
const Button = ({ labelText }) => {
  return (
    <button className="button-instance">
      {labelText}
    </button>
  );
};

// Define the NavigationPill component
const NavigationPill = ({ label }) => {
  return (
    <div className="navigation-pill-instance">
      {label}
    </div>
  );
};

export const MyProjects = () => {
  return (
    <div className="view-more-hackathon">
      <div className="div">
        <div className="top-bar">
          <div className="overlap">
            <div className="yellow">
              <div className="overlap-group">
                <div className="yellow-up" />
              </div>
            </div>
            <div className="home-and-logout">
              <div className="overlap-2">
                <div className="home-abt-supp">
                  <div className="navigation-pill-list">
                    <div className="navigation-pill-2" />
                    <NavigationPill label="Home" />
                    <NavigationPill label="About" />
                    <NavigationPill label="Support" />
                    <NavigationPill label="" />
                  </div>
                </div>
                <div className="log-out">
                  <div className="logout">Log out</div>
                </div>
              </div>
            </div>
            <MdAccountCircle className="account-circle" opacity="0.85" />
            <p className="hack-a-trek">
              <span className="text-wrapper">Hack’</span>
              <span className="span">a</span>
              <span className="text-wrapper">’Trek</span>
            </p>
          </div>
        </div>
        <div className="overlap-3">
          <div className="rectangle" />
          <div className="rectangle" />
          <Button labelText="View" />
        </div>
        <div className="overlap-4">
          <div className="rectangle-2" />
          <Button labelText="View" />
        </div>
        <div className="overlap-5">
          <div className="rectangle" />
          <Button labelText="View" />
        </div>
        <div className="overlap-6">
          <div className="rectangle-3" />
          <Button labelText="View" />
        </div>
        <div className="overlap-7">
          <div className="rectangle" />
          <Button labelText="View" />
        </div>
        <div className="overlap-8">
          <div className="rectangle" />
          <Button labelText="View" />
        </div>
        <div className="text-wrapper-2">My Projects</div>
        <div className="group">
          <div className="rectangle-4" />
        </div>
        <div className="rectangle-wrapper">
          <div className="rectangle-4" />
        </div>
        <div className="div-wrapper">
          <div className="rectangle-4" />
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
