import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import LandingPage from './pages/LandingPage';

import PartSignup from './pages/participants_pages/PartSignup/PartSignup';
import PartLogin from './pages/participants_pages/PartLogin/PartLogin';
import HomePage from './pages/participants_pages/HomePage/HomePage';
import ViewmoreHackathon from './pages/participants_pages/ViewmoreHackathon/ViewmoreHackathon';
import ApplicationPage from './pages/participants_pages/ApplicationPage/ApplicationPage'
import ThankyouPage from './pages/participants_pages/ThankyouPage/ThankyouPage'
import ParticipantProfile from './pages/participants_pages/ParticipantProfile/ParticipantProfile'
import EventDay from './pages/participants_pages/EventDay/EventDay';
import ViewApplication from './pages/participants_pages/ViewApplication/ViewApplication';
import Projects from "./pages/participants_pages/Projects/Projects"
import MyProjects from "./pages/participants_pages/MyProjects/MyProjects"
import WinnersPage from './pages/participants_pages/WinnersPage/WinnersPage';


import OrgLogin from './pages/organisers_pages/OrgLogin/OrgLogin';
import OrgSignup from './pages/organisers_pages/OrgSignup/OrgSignup';
import ConductHackathon from './pages/organisers_pages/ConductHackathon/ConductHackathon';
import DetailsFillPage from './pages/organisers_pages/DetailsFillPage/DetailsFillPage'
import HackathonPosted from './pages/organisers_pages/HackathonPosted/HackathonPosted';
import ViewHackathon from './pages/organisers_pages/ViewHackathon/ViewHackathon';
import StartHackathon from './pages/organisers_pages/StartHackathon/StartHackathon'
import Feedback from './pages/organisers_pages/Feedback/Feedback';
import Submissions from './pages/organisers_pages/Submissions/Submissions';
import PublishResults from './pages/organisers_pages/PublishResults/PublishResults'
import EndHackathon from './pages/organisers_pages/EndHackathon/EndHackathon'
import EndSubmission from './pages/organisers_pages/EndSubmission/EndSubmission';
import OrganiserProfile from './pages/organisers_pages/OrganiserProfile/OrganiserProfile';



function App() {
  return (
    <Router>
      <Routes>

        <Route path="/landing" element={<LandingPage />} />

        {/* Participant */}

        <Route path="/psignup" element={<PartSignup />} />
        <Route path="/plogin" element={<PartLogin />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/viewhackathon" element={<ViewmoreHackathon />} />
        <Route path="/application" element={<ApplicationPage />} />
        <Route path="/winners" element={<WinnersPage />} />
        <Route path="/thankyou" element={<ThankyouPage />} />
        <Route path="/pprofile" element={<ParticipantProfile />} />
        <Route path="/peventday" element={<EventDay />} />
        <Route path="/viewapplication" element={<ViewApplication />} />
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
        <Route path="/submission" element={<Submissions/>} />
        <Route path="/end" element={<EndHackathon/>} />
        <Route path="/endsubmission" element={<EndSubmission/>} />
        <Route path="/publish" element={<PublishResults/>} />





      </Routes>
    </Router>
  );
}

export default App;
