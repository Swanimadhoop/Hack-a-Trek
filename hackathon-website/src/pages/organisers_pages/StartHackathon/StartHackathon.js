import React, { useState, useEffect } from "react";
import { MdAccountCircle, MdDownload } from "react-icons/md";
import Button from "@mui/material/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./StartHackathon.css";

export const StartHackathon = () => {
  const [timeLeft, setTimeLeft] = useState(null);
  const [autoStart, setAutoStart] = useState(false);
  const [hackathonDetails, setHackathonDetails] = useState(null);
  const [showParticipants, setShowParticipants] = useState(false);
  const [participants, setParticipants] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const hackathonName = location.state?.hackathonName;
  const { id: _id } = useParams();

  const handleStartHackathonClick = () => {
    navigate(`/submission/${_id}`);
  };

  // Fetch hackathon details
  useEffect(() => {
    const fetchHackathonDetails = async () => {
      // Use the environment variable for the base URL
      const BASE_URL = `http://34.93.250.108/api/v1/hackathon`;

      // Define the endpoint for fetching hackathon details as a variable
      const GET_HACKATHON_DETAILS_API = `${BASE_URL}/${_id}`;

      try {
        // Send a GET request to the API endpoint to fetch hackathon details
        const response = await axios.get(GET_HACKATHON_DETAILS_API);

        console.log("Fetched hackathon details:", response.data); // Debug log
        setHackathonDetails(response.data);

        // Calculate timeLeft based on dateOfEvent
        if (response.data && response.data.dateOfEvent) {
          const eventDate = new Date(response.data.dateOfEvent).getTime();
          const currentTime = new Date().getTime();
          const timeDifference = Math.floor((eventDate - currentTime) / 1000);
          setTimeLeft(timeDifference > 0 ? timeDifference : 0);
        }
      } catch (error) {
        console.error("Error fetching hackathon details:", error);
      }
    };

    if (_id) fetchHackathonDetails();
  }, [_id]);

  // Fetch participants when sidebar is open
  useEffect(() => {
    const fetchParticipants = async () => {
      // Use the environment variable for the base URL
      const BASE_URL = `http://34.93.250.108/api/v1/hackathon`;

      try {
        const response = await axios.get(`${BASE_URL}/${_id}/participants`);
        setParticipants(response.data.participants || []);
      } catch (error) {
        console.error("Error fetching participants:", error);
      }
    };

    if (showParticipants && _id) fetchParticipants();
  }, [showParticipants, _id]);

  return (
    <div className="start-hackathon-page">
      {/* Header */}
      <div className="header">
        <div className="navigation-start">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Support</a>
        </div>
        <Button
          variant="contained"
          className="log-out-button-start"
          onClick={() => console.log("Logging out")}
        >
          Log Out
        </Button>
        <MdAccountCircle className="account-icon-start" />
      </div>

      {/* Main Content */}
      <div className="hack-a-trek-container">
        <p className="hack-a-trek-start">
          <span>Hack’</span>
          <span className="purple-start">a</span>
          <span>’Trek</span>
        </p>
      </div>
      <div className="main-content">
        {/* Hackathon Info */}
        <div className="hackathon-info">
          <label className="form-label">
            <strong>{hackathonName}</strong> {/* Hackathon name from location */}
          </label>
          {hackathonDetails ? (
            <>
              <div className="hackathon-date">
                <p>
                  <strong>Date of Event:</strong> {new Date(hackathonDetails.dateOfEvent).toLocaleDateString()}
                </p>
              </div>
              <div className="hackathon-mode">
                <p><strong>Mode of Event:</strong> {hackathonDetails.modeOfEvent}</p>
              </div>
              <div className="hackathon-description">
                <p><strong>Description:</strong> {hackathonDetails.description}</p>
              </div>
            </>
          ) : (
            <p>Loading hackathon details...</p>
          )}
        </div>

        {/* Participant List Button */}
        <div className="participant-list-container">
          <div className="participant-list" onClick={() => setShowParticipants(!showParticipants)}>
            <p>Participant list</p>
            <MdDownload className="download-icon" />
          </div>
        </div>

        <button className="start-hackathon-button" onClick={handleStartHackathonClick}>
          Start Hackathon
        </button>
      </div>

      {/* Sidebar for Participant Names */}
      {showParticipants && (
        <div className="participant-sidebar">
          <h3>Registered Participants</h3>
          {participants.length > 0 ? (
            <ul>
              {participants.map((participant, index) => (
                <li key={index}>{participant.name}</li>
              ))}
            </ul>
          ) : (
            <p>No participants yet.</p>
          )}
          <div className="participant-button">
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setShowParticipants(false)}
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StartHackathon;
