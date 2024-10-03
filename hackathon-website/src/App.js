import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

import RegistrationPage from './pages/participants_pages/RegistrationPage';
import LoginPage from './pages/participants_pages/LoginPage';
import HomePage from './pages/participants_pages/HomePage';
import ViewmoreHackathon from './pages/participants_pages/ViewmoreHackathon';
import ApplicationPage from './pages/participants_pages/ApplicationPage'
import ThankyouPage from './pages/participants_pages/ThankyouPage'
import ParticipantProfile from './pages/participants_pages/ParticipantProfile'
import EventDay from './pages/participants_pages/EventDay';
import AppliedHackathon from './pages/participants_pages/AppliedHackathon';
import Projects from "./pages/participants_pages/Projects"
import MyProjects from "./pages/participants_pages/MyProjects"
import WinnersPage from './pages/participants_pages/WinnersPage';


import OrgLogin from './pages/organisers_pages/OrgLogin';
import OrgSignup from './pages/organisers_pages/OrgSignup';
import ConductHackathon from './pages/organisers_pages/ConductHackathon';
import DetailsFillPage from './pages/organisers_pages/DetailsFillPage'
import HackathonPosted from './pages/organisers_pages/HackathonPosted';
import ViewHackathon from './pages/organisers_pages/ViewHackathon';
import StartHackathon from './pages/organisers_pages/StartHackathon'
import Feedback from './pages/organisers_pages/Feedback';
import PublishResults from './pages/organisers_pages/PublishResults'
import Submissions from './pages/organisers_pages/Submissions';
import OrganiserProfile from './pages/organisers_pages/OrganiserProfile'




function App() {
  return (
    <Router>
      <Routes>

        <Route path="/landing" element={<LandingPage />} />

        {/* Participant */}

        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/viewhackathon" element={<ViewmoreHackathon />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/pprofile" element={<ParticipantProfile />} />
        <Route path="/peventday" element={<EventDay />} />
        <Route path="/appliedhackathon" element={<AppliedHackathon />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/myprojects" element={<MyProjects />} />

        {/* Organiser */}

        <Route path="/ologin" element={<OrgLogin/>}/>
        <Route path="/osignup" element={<OrgSignup/>}/>
        <Route path="/conduct" element={<ConductHackathon/>} />
        <Route path="/detailsfill" element={<DetailsFillPage />} />
        <Route path="/posted" element={<HackathonPosted />} />
        <Route path="/view" element={<ViewHackathon/>} />
        <Route path="/start" element={<StartHackathon/>} />
        <Route path="/feedback" element={<Feedback/>} />
        <Route path="/oprofile" element={<OrganiserProfile/>} />
        <Route path="/publish" element={<PublishResults/>} />

        
        <Route path="/submission" element={<Submissions/>} />


















      </Routes>
    </Router>
  );
}

export default App;
