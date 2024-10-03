import React from "react";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdOutlineArrowCircleRight } from "react-icons/md";
import Nunny from '../../../src/assets/v823-nunny-16b.jpg';
import laika from '../../../src/assets/laika-rag-pipeline-featured.png';
import earth from '../../../src/assets/EARTH_DAY_2019_WEB_orig.width-1024.jpg';
import dpu from '../../../src/assets/DPU-Hackathon-featured.png';
import nways from '../../../src/assets/N-ways-to-GPU-Programming-Bootcamp.jpg';


import "./HomePage.css";



export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="div">
        <div className="overlap">
          <p className="hack-a-trek">
            <span className="text-wrapper">Hack’</span>
            <span className="span">a</span>
            <span className="text-wrapper">’Trek</span>
          </p>
          <div className="white-bg" />
          <div className="group" />
          <div className="group-2" />
          <div className="group-3">
            <div className="JOIN-HACKATHON">
              <div className="overlap-group">
                <div className="card">
                  <div className="info-2" />
                  <div className="body">
                    <div className="text">
                      <div className="title">Join a Hackathon</div>
                      <p className="body-text-for">
                        Register for hackathons, collaborate with global teams, manage submissions, and receive
                        real-time updates and feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <IoIosAddCircle className="add-circle" />
              </div>
            </div>
            <div className="log-out">
              <div className="logout">Log out</div>
            </div>
          </div>
          <div className="home-abt-supp">
            <div className="navigation-pill-list">
              <div className="navigation-pill" />
              <div className="title-wrapper">
                <div className="title-2">Home</div>
              </div>
              <div className="title-wrapper">
                <div className="title-2">About</div>
              </div>
              <div className="title-wrapper">
                <div className="title-2">Support</div>
              </div>
              <div className="title-wrapper">
                <div className="title-3">{""}</div>
              </div>
            </div>
          </div>
          <div className="rectangle" />
          <div className="wallpaper-bg">
            <p className="YOUR-GATEWAY-TO-THE">
              <span className="text-wrapper-2">YOUR GATEWAY TO THE </span>
              <span className="span">COMPLETE</span>
              <span className="text-wrapper-2"> HACKATHON </span>
              <span className="span">EXPERIENCE</span>
            </p>
            <div className="overlap-2">
              <img className="nunny" alt="Nunny" src={Nunny} />
              <img className="v-nunny-b" alt="Nunny" src={Nunny} />
              <div className="div-wrapper">
                <div className="text-wrapper-3">upcoming events...</div>
              </div>
            </div>
            <img className="vector" alt="Vector" src="vector-1.svg" />
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="card-2">
                  <div className="info-2" />
                  <div className="body-2">
                    <div className="text">
                      <div className="title">Advanced Judging Interface</div>
                      <p className="body-text-for">
                        Comprehensive evaluation platform for judges to score, rank, and provide detailed feedback,
                        powered by customizable scoring algorithms.
                      </p>
                    </div>
                  </div>
                </div>
                <IoMdInformationCircleOutline className="info-instance" />
              </div>
            </div>
            <div className="overlap-3">
              <div className="overlap-wrapper">
                <div className="overlap-4">
                  <div className="card-wrapper">
                    <div className="card-3">
                      <div className="info-2" />
                      <div className="body">
                        <div className="text">
                          <div className="title">Automated Submission Workflow</div>
                          <p className="body-text-for">
                            Intuitive submission system allowing participants to upload projects with secure file
                            storage and deadline enforcement.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <IoMdInformationCircleOutline className="icon-instance-node" />
                </div>
              </div>
              <p className="HOW-WE-WORK">
                <span className="text-wrapper-4">HOW WE WORK</span>
                <span className="span">
                  ?<br />
                </span>
              </p>
            </div>
            <div className="icon-wrapper">
              <img className="icon" alt="Icon" src="icon.svg" />
            </div>
            <button className="button">
              <div className="state-layer">
                <div className="label-text">Find</div>
              </div>
            </button>
          </div>
          <div className="group-wrapper">
            <div className="group-4">
              <div className="overlap-group-3">
                <div className="card-4">
                  <div className="info-2" />
                  <div className="body">
                    <div className="text">
                      <div className="title">Join a Hackathon</div>
                      <p className="body-text-for">
                        Register for hackathons, collaborate with global teams, manage submissions, and receive
                        real-time updates and feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-5">
                  <div className="info-2" />
                  <div className="body">
                    <div className="text">
                      <div className="title">User Authentication System</div>
                      <p className="body-text-for">
                        Secure and streamlined user registration and login, <br />
                        enabling role-based
                        <br />
                        access for participants
                        <br />
                        and organizers.
                      </p>
                    </div>
                  </div>
                </div>
                <IoMdInformationCircleOutline className="info-3" />
              </div>
            </div>
          </div>
          <div className="group-5">
            <div className="group-6">
              <div className="overlap-group-4">
                <div className="card-6">
                  <div className="info-2" />
                  <div className="body">
                    <div className="text">
                      <div className="title">Join a Hackathon</div>
                      <p className="body-text-for">
                        Register for hackathons, collaborate with global teams, manage submissions, and receive
                        real-time updates and feedback.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card-7">
                  <div className="info-2" />
                  <div className="body">
                    <div className="text">
                      <div className="title">
                        Dynamic
                        <br />
                        Event Management
                      </div>
                      <p className="body-text-for">
                        Robust tools for creating and managing hackathon events, with full configuration of timelines,
                        rules, and participant tracking.
                      </p>
                    </div>
                  </div>
                </div>
                <IoMdInformationCircleOutline className="info-4" />
              </div>
            </div>
          </div>
          <div className="rectangle-2" />
        </div>
        <div className="overlap-5">
          <div className="rectangle-3" />
          <div className="rectangle-4" />
          <div className="group-7">
            <div className="overlap-6">
              <div className="group-8">
                <div className="group-9">
                  <div className="overlap-group-5">
                    <div className="card-8">
                      <div className="info-2" />
                      <div className="body">
                        <div className="text">
                          <div className="title">Join a Hackathon</div>
                          <p className="body-text-for">
                            Register for hackathons, collaborate with global teams, manage submissions, and receive
                            real-time updates and feedback.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-9">
                      <div className="info-2" />
                      <div className="body-3" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="n-ways-to-GPU" alt="N ways to GPU" src={nways} />
              <p className="NCHC-n-ways-to-GPU">
                <a
                  href="https://www.openhackathons.org/s/siteevent/a0CUP00000L44xb2AB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-5">
                    NCHC N-Ways to GPU Programming Bootcamp
                    <br />
                    <br />
                  </span>
                </a>
                <span className="text-wrapper-6">
                  Dates: September 24-25, 2024
                  <br />
                  Event Focus:HPC
                  <br />
                  Event Format:Hybrid Event
                  <br />
                  Region:Asia-Pacific
                  <br />
                  Application Status:{" "}
                </span>
                <a
                  href="https://www.openhackathons.org/s/siteevent/a0CUP00000L44xb2AB"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-5">Open</span>
                </a>
              </p>
            </div>
          </div>
          <div className="group-10">
            <div className="overlap-7">
              <div className="group-11">
                <div className="group-12">
                  <div className="overlap-group-6">
                    <div className="card-10">
                      <div className="info-2" />
                      <div className="body">
                        <div className="text">
                          <div className="title">Join a Hackathon</div>
                          <p className="body-text-for">
                            Register for hackathons, collaborate with global teams, manage submissions, and receive
                            real-time updates and feedback.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-11">
                      <div className="info-2" />
                      <div className="body-3" />
                    </div>
                  </div>
                </div>
              </div>
              <img className="laika-rag-pipeline" alt="Laika rag pipeline" src={laika} />
              <p className="NVIDIA-NIM-hackathon">
                <a
                  href="https://www.openhackathons.org/s/siteevent/a0CUP00000kOrM72AK"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-5">
                    NVIDIA NIM Hackathon
                    <br />
                  </span>
                </a>
                <span className="text-wrapper-7">
                  <br />
                </span>
                <a
                  href="https://www.openhackathons.org/s/siteevent/a0CUP00000kOrM72AK"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-5">
                    <br />
                  </span>
                </a>
                <span className="text-wrapper-7">
                  Dates: September 18, 2024 - October 23, 2024
                  <br />
                  Event Focus:AI
                  <br />
                  Event Format:Hybrid Event
                  <br />
                  Region:Asia-Pacific
                  <br />
                  Application Status:{" "}
                </span>
                <a
                  href="https://www.openhackathons.org/s/siteevent/a0CUP00000kOrM72AK"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-5">Open</span>
                </a>
              </p>
            </div>
          </div>
          <div className="group-13">
            <div className="overlap-8">
              <div className="group-14">
                <div className="group-15">
                  <div className="overlap-group-7">
                    <div className="card-12">
                      <div className="info-2" />
                      <div className="body">
                        <div className="text">
                          <div className="title">Join a Hackathon</div>
                          <p className="body-text-for">
                            Register for hackathons, collaborate with global teams, manage submissions, and receive
                            real-time updates and feedback.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="card-13">
                      <div className="info-2" />
                      <div className="body-3" />
                    </div>
                    <div className="add-circle-2" />
                    <div className="info-5" />
                  </div>
                </div>
              </div>
              <img className="EARTH-DAY-WEB" alt="Earth DAY WEB" src={earth} />
              <p className="NASA-open-hackathon">
                <a
                  href="https://www.openhackathons.org/s/siteevent/a0C5e000008dWiCEAU"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="text-wrapper-5">
                    NASA Open Hackathon
                    <br />
                    <br />
                  </span>
                </a>
                <span className="text-wrapper-6">
                  Dates: September 10-19, 2024
                  <br />
                  Event Focus:HPC+AI
                  <br />
                  Event Format:Virtual Event
                  <br />
                  Region:North America/Latin America
                  <br />
                  Application Status: Closed
                </span>
              </p>
            </div>
          </div>
          <div className="group-16">
            <div className="group-17">
              <div className="overlap-8">
                <div className="group-14">
                  <div className="group-15">
                    <div className="overlap-group-7">
                      <div className="card-12">
                        <div className="info-2" />
                        <div className="body">
                          <div className="text">
                            <div className="title">Join a Hackathon</div>
                            <p className="body-text-for">
                              Register for hackathons, collaborate with global teams, manage submissions, and receive
                              real-time updates and feedback.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-13">
                        <div className="info-2" />
                        <div className="body-3" />
                      </div>
                    </div>
                  </div>
                </div>
                <img className="DPU-hackathon" alt="Dpu hackathon" src={dpu} />
                <p className="NVIDIA-holoscan">
                  <a
                    href="https://www.openhackathons.org/s/siteevent/a0CUP00000haVXi2AM"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-5">
                      NVIDIA Holoscan Bootcamp
                      <br />
                    </span>
                  </a>
                  <span className="text-wrapper-6">
                    <br />
                    Dates: September 24-24, 2024
                    <br />
                    Event Focus:AI
                    <br />
                    Event Format:Virtual Event
                    <br />
                    Region:North America/Latin America
                    <br />
                    Application Status:{" "}
                  </span>
                  <a
                    href="https://www.openhackathons.org/s/siteevent/a0CUP00000haVXi2AM"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="text-wrapper-5">Open</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="rectangle-5" />
          <img className="vector-2" alt="Vector" src="vector-2.svg" />
          <button className="state-layer-wrapper">
            <div className="state-layer">
              <div className="label-text">view more-&gt;</div>
            </div>
          </button>
          <img className="v-nunny" alt="Nunny" src={Nunny}/>
          <div className="group-18">
            <div className="group-19">
              <div className="overlap-9">
                <div className="group-19">
                  <div className="group-20">
                    <div className="overlap-group-8">
                      <div className="card-14">
                        <div className="info-2" />
                        <div className="body-4">
                          <div className="text">
                            <div className="title">Join a Hackathon</div>
                            <p className="body-text-for">
                              Register for hackathons, collaborate with global teams, manage submissions, and receive
                              real-time updates and feedback.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-15">
                        <div className="info-2" />
                        <div className="body">
                          <div className="text">
                            <div className="title">
                              TINKERHUB JUNE2024 <br />
                              HACKATHON RESULTS
                            </div>
                            <p className="body-text-for"> announced the winners of the hackathon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MdOutlineArrowCircleRight className="arrow-right-circle" />
              </div>
            </div>
            <div className="group-21">
              <div className="overlap-9">
                <div className="group-19">
                  <div className="group-20">
                    <div className="overlap-group-8">
                      <div className="card-14">
                        <div className="info-2" />
                        <div className="body-4">
                          <div className="text">
                            <div className="title">Join a Hackathon</div>
                            <p className="body-text-for">
                              Register for hackathons, collaborate with global teams, manage submissions, and receive
                              real-time updates and feedback.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-15">
                        <div className="info-2" />
                        <div className="body">
                          <div className="text">
                            <div className="title">
                              Solidus Ai Tech
                              <br /> Hack-AI-Thon
                            </div>
                            <p className="body-text-for"> announced the winners of the hackathon</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MdOutlineArrowCircleRight className="arrow-right-circle" />
              </div>
            </div>
          </div>
          <div className="group-22">
            <div className="group-23">
              <div className="overlap-10">
                <div className="group-24">
                  <div className="group-23">
                    <div className="overlap-group-9">
                      <div className="card-16">
                        <div className="info-2" />
                        <div className="body-5">
                          <div className="text">
                            <div className="title">Join a Hackathon</div>
                            <p className="body-text-for">
                              Register for hackathons, collaborate with global teams, manage submissions, and receive
                              real-time updates and feedback.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-17">
                        <div className="info-2" />
                        <div className="body">
                          <div className="text">
                            <div className="title">NHSF 2024/03 RESULTS</div>
                            <p className="body-text-for">
                              We have enjoyed trying out every single submission
                              <br />
                              we have received! <br />
                              You can find the results now
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <MdOutlineArrowCircleRight className="arrow-right-circle-instance" />
              </div>
            </div>
          </div>
          <p className="AND-THE-WINNERS-ARE">
            <span className="text-wrapper-8">
              AND THE <br />
            </span>
            <span className="text-wrapper-9">WINNERS</span>
            <span className="text-wrapper-8">
              {" "}
              <br />
              ARE...
            </span>
          </p>
          <div className="text-wrapper-10">view as list</div>
          <div className="rectangle-6" />
          <footer className="footer">
            <div className="title-4">
              <div className="figma" />
              <div className="button-list">
                <div className="x-logo" />
                <div className="logo-youtube" />
              </div>
            </div>
            <div className="text-link-list">
              <div className="text-strong-wrapper">
                <div className="text-strong">
                  <div className="text-strong-2">Use cases</div>
                </div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">Join hackathons</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">Conduct hackathons</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
            </div>
            <div className="text-link-list">
              <div className="text-strong-wrapper">
                <div className="text-strong">
                  <div className="text-strong-2">Explore</div>
                </div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">Hackathon programs</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">Coding Culture</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">Project ideas</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
            </div>
            <div className="text-link-list">
              <div className="text-strong-wrapper">
                <div className="text-strong">
                  <div className="text-strong-2">Resources</div>
                </div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">Blog</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item">
                <div className="list-item">{""}</div>
              </div>
              <div className="text-link-list-item" />
            </div>
          </footer>
          <div className="text-wrapper-11">Developers</div>
          <div className="text-wrapper-12">Support</div>
          <img className="title-5" alt="Title" src="title.svg" />
          <img className="wallpaper-bg-4" alt="Wallpaper bg" src="wallpaper-bg-3.png" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;