import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import "./EventDay.css";

export const EventDay = () => {
    const [file, setFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState("");

    // Handle file selection
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle file upload
    const handleUpload = async () => {
        if (!file) {
            setUploadStatus("Please select a file first.");
            return;
        }

        const formData = new FormData();
        formData.append("projectFile", file);

        try {
            setUploadStatus("Uploading...");
            const response = await fetch("http://localhost:4000/api/v1/upload", {  // Replace with actual upload endpoint
                method: "POST",
                body: formData,
                credentials: "include"
            });
            
            if (response.ok) {
                setUploadStatus("Upload successful!");
                setFile(null);  // Clear file input after successful upload
            } else {
                setUploadStatus("Upload failed. Please try again.");
            }
        } catch (error) {
            console.error("Error uploading file:", error);
            setUploadStatus("Error during upload.");
        }
    };

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
                            <input
                                type="file"
                                accept=".png, .jpg, .jpeg, .pdf" // Accept only images and PDFs
                                onChange={handleFileChange}
                                className="file-input"
                            />
                            <button 
                                onClick={handleUpload} 
                                className="upload-button" 
                                disabled={!file} // Disable until file is selected
                            >
                                <IoArrowUpCircleOutline className="arrow-up-circle" />
                            </button>
                            <div className="upload-status">{uploadStatus}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDay;
