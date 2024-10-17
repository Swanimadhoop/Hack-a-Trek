import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import "./ViewApplication.css";
import Button from "@mui/material/Button"; // Importing Material-UI Button

export const ViewApplication = () => {
  const [teamName, setTeamName] = useState("Pre-filled Team Name");
  const [teamLeader, setTeamLeader] = useState("Pre-filled Team Leader Name");
  const [teamLeaderEmail, setTeamLeaderEmail] = useState("leader@example.com");
  const [hackathonIdea, setHackathonIdea] = useState("Pre-filled Hackathon Idea");
  const [members, setMembers] = useState([
    { name: "Member 1 Name", email: "member1@example.com" }
  ]);

  const handleAddMember = () => {
    setMembers([...members, { name: "New Member Name", email: "newmember@example.com" }]);
  };

  return (
    <div className="application-page">
      <div className="overlap-wrapper-app">
        <div className="overlap-app">
          <div className="overlap-group-app">
            <div className="yellow-app">
              <div className="div-app">
                <div className="yellow-up-app" />
              </div>
            </div>
            <nav className="home-and-logout-app">
              <div className="navigation-app">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Support</a>
              </div>
              <Button
                variant="contained-app"
                className="log-out-btton-app"
                onClick={() => console.log("Logging out")} // Add your logout functionality here
              >
                Log Out
              </Button>
            </nav>

            <MdAccountCircle className="account-circle-app" />
            <p className="hack-a-trek-details-app">
              <span className="span-app">Hack’</span>
              <span className="text-wrapper-2-app">a</span>
              <span className="span-app">’Trek</span>
            </p>

            <div className="rectangle-app" />
            <div className="div-wrapper-app">
              <div className="overlap-4-app">
                <label className="team-name-label">
                  Team Name:
                  <input
                    type="text"
                    value={teamName}
                    readOnly // Making the input non-editable
                    className="team-name-input"
                  />
                </label>
                <label className="team-leader-label">
                  Team Leader Name:
                  <input
                    type="text"
                    value={teamLeader}
                    readOnly // Making the input non-editable
                    className="team-leader-input"
                  />
                </label>
                <label className="email-label">
                  Email ID:
                  <input
                    type="text"
                    value={teamLeaderEmail}
                    readOnly // Making the input non-editable
                    className="TeamLeaderEmail-input"
                  />
                </label>

                {/* Member input fields */}
                {members.map((member, index) => (
                  <div key={index} className="member-input-group">
                    <label className="member-label">
                      Member {index + 1} Name:
                      <input
                        type="text"
                        name="name"
                        value={member.name}
                        readOnly // Making the input non-editable
                        className="member-input"
                      />
                    </label>
                    <label className="email-label">
                      Email ID:
                      <input
                        type="text"
                        name="email"
                        value={member.email}
                        readOnly // Making the input non-editable
                        className="email-input"
                      />
                    </label>
                  </div>
                ))}

                
                <label className="hackathon-idea-label">
                  Hackathon Idea:
                  <input
                    type="text"
                    value={hackathonIdea}
                    readOnly // Making the input non-editable
                    className="hackathon-idea-input"
                  />
                </label>
                
              </div>
            </div>
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

export default ViewApplication;
