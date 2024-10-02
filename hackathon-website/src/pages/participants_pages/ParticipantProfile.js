import React from "react"; 
import { MdAccountCircle } from "react-icons/md"; 
import "./ParticipantProfile.css"; 

export const ParticpantProfile = () => { 
    return ( 
        <div className="particpant-profile"> 
            <div className="div-2"> 
                <div className="overlap"> 
                    <div className="yellow"> 
                        <div className="overlap-group"> 
                            <div className="yellow-up" /> 
                            <img className="wallpaper-bg" alt="Wallpaper bg" src="wallpaper-bg.png" /> 
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
                                </div> 
                            </div> 
                            <div className="log-out"> 
                                <div className="logout">Log out</div> 
                            </div> 
                        </div> 
                    </div> 
                    <p className="hack-a-trek"> 
                        <span className="span">Hack’</span> 
                        <span className="text-wrapper-2">a</span> 
                        <span className="span">’Trek</span> 
                    </p> 
                </div> 
                <div className="overlap-3"> 
                    <div className="yellow-2" /> 
                    <div className="yellow-3" /> 
                    <div className="frame"> 
                        <div className="yellow-up-2" /> 
                    </div> 
                    <div className="frame"> 
                        <div className="yellow-up-2" /> 
                    </div> 
                    <p className="applied-hackathons"> 
                        <span className="text-wrapper-3"> Applied <br /> </span> 
                        <span className="text-wrapper-2"> Hackathons <br /> <br /> </span> 
                    </p> 
                    <p className="RUNNING-hackathons"> 
                        <span className="text-wrapper-3"> RUNNING <br /> </span> 
                        <span className="text-wrapper-2"> Hackathons <br /> <br /> </span> 
                    </p> 
                    <p className="YOUR-PROJECTS"> 
                        <span className="text-wrapper-2"> YOUR <br /> </span> 
                        <span className="text-wrapper-3"> PROJECTS <br /> </span> 
                        <span className="text-wrapper-2"> <br /> </span> 
                        
                    </p> 
                    {/* Add More Button */}
                    <button className="add-more-button">Add More +</button>
                    
                    <div className="rectangle" /> 
                    <div className="rectangle-2" /> 
                    <div className="rectangle-3" /> 
                    <div className="rectangle-4" /> 
                    <div className="rectangle-5" /> 
                    <div className="rectangle-6" /> 
                    <div className="rectangle-7" /> 
                    <div className="rectangle-8" /> 
                    <div className="rectangle-9" /> 
                    <div className="rectangle-10" /> 
                    <div className="rectangle-11" /> 
                    <div className="rectangle-12" /> 
                    <img className="vector" alt="Vector" src="vector-19.svg" /> 
                    <img className="img" alt="Vector" src="vector-20.svg" /> 
                    <img className="vector-2" alt="Vector" src="vector-21.svg" /> 
                </div> 
                <div className="overlap-4"> 
                    <MdAccountCircle className="account-circle" /> 
                    <div className="avatar-info">
                        <p className="text-wrapper-2">Anna</p>
                        <p className="text-wrapper-2">Harvard University</p>
                    </div>
                </div> 
                <img className="vector-4" alt="Vector" src="vector-18.svg" /> 
                <div className="overlap-7"> 
                    <img className="group" alt="Group" src="group-49.png" /> 
                    <img className="group-2" alt="Group" src="group-50.png" /> 
                    <div className="text-wrapper-4">About me</div> 
                </div> 
            </div> 
        </div> 
    ); 
};

export default ParticpantProfile;
