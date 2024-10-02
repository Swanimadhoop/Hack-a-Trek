import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import "./ApplicationPage.css";

export const ApplicationPage = () => {
  const [teamName, setTeamName] = useState("");
  const [teamLeader, setTeamLeader] = useState("");
  const [teamLeaderEmail, setTeamLeaderEmail] = useState("");
  const [hackathonIdea, setHackathonIdea] = useState("");
  const [members, setMembers] = useState([{ name: "", email: "" }]);

  const handleAddMember = () => {
    setMembers([...members, { name: "", email: "" }]);
  };

  const handleMemberChange = (index, event) => {
    const newMembers = [...members];
    newMembers[index][event.target.name] = event.target.value;
    setMembers(newMembers);
  };

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
                <div className="log-out">
                  <div className="logout">Log out</div>
                </div>
              </div>
            </div>
            <MdAccountCircle className="Mdaccount-circle" />
            <p className="hack-a-trek">
              <span className="text-wrapper">Hack’</span>
              <span className="span">a</span>
              <span className="text-wrapper">’Trek</span>
            </p>
            <div className="rectangle" />
            <div className="div-wrapper">
              <div className="overlap-4">
                <label className="team-name-label">
                  Team Name:
                  <input
                    type="text"
                    value={teamName}
                    onChange={(e) => setTeamName(e.target.value)}
                    className="team-name-input"
                    placeholder="Enter your team name"
                  />
                </label>
                <label className="team-leader-label">
                  Team Leader Name:
                  <input
                    type="text"
                    value={teamLeader}
                    onChange={(e) => setTeamLeader(e.target.value)}
                    className="team-leader-input"
                    placeholder="Enter team leader name"
                  />
                </label>
                <label className="email-label">
                  Email ID:
                  <input
                    type="TeamLeaderEmail"
                    value={teamLeaderEmail}
                    onChange={(e) => setTeamLeaderEmail(e.target.value)}
                    className="TeamLeaderEmail-input"
                    placeholder="Enter email ID"
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
                        onChange={(e) => handleMemberChange(index, e)}
                        className="member-input"
                        placeholder="Enter member name"
                      />
                    </label>
                    <label className="email-label">
                      Email ID:
                      <input
                        type="email"
                        name="email"
                        value={member.email}
                        onChange={(e) => handleMemberChange(index, e)}
                        className="email-input"
                        placeholder="Enter email ID"
                      />
                    </label>
                  </div>
                ))}

                <div className="text-wrapper-2" style={{ marginTop: "15px" }}>
                  <button onClick={handleAddMember} className="add-more-button">
                    Add more +
                  </button>
                </div>

                <label className="hackathon-idea-label">
                  Hackathon Idea:
                  <input
                    type="text"
                    value={hackathonIdea}
                    onChange={(e) => setHackathonIdea(e.target.value)}
                    className="hackathon-idea-input"
                    placeholder="Enter your hackathon idea"
                  />
                </label>
                {/* Register button */}
                <button className="button-instance register-button">
                  Register
                </button>
              </div>
            </div>
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

export default ApplicationPage;
