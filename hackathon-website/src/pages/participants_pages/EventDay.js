import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import "./EventDay.css";

export const EventDay = () => {
    return (
        <div className="organizers-page-on">
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
                                        {/* Removed NavigationPill components */}
                                    </div>
                                </div>
                                <div className="log-out">
                                    <div className="logout">Log out</div>
                                </div>
                            </div>
                        </div>
                        <MdAccountCircle className="account-circle" />
                        <p className="hack-a-trek">
                            <span className="text-wrapper">Hack’</span>
                            <span className="span">a</span>
                            <span className="text-wrapper">’Trek</span>
                        </p>
                    </div>
                </div>
                <div className="overlap-3">
                    <div className="hackthin-name">
                        <img className="vector" alt="Vector" src="vector-4.svg" />
                        <div className="text-wrapper-2">Team Name -</div>
                    </div>
                    <div className="div-wrapper">
                        <div className="text-wrapper-3">details</div>
                    </div>
                </div>
                <div className="overlap-4">
                    <div className="particpntlist">
                        <div className="paetcipnt-list">
                            <div className="text-wrapper-4">Upload your project</div>
                        </div>
                    </div>
                    <IoArrowUpCircleOutline className="arrow-up-circle" />
                </div>
            </div>
        </div>
    );
};

export default EventDay;
