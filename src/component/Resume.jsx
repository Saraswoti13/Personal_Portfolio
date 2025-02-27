/* eslint-disable no-unused-vars */
import React from "react";
import resume from "../assets/resume/resume.jpg"
import "../css/Resume.css"; 

const Resume = () => {
  return (
    <div className="resume-container">
      <h1>My Resume</h1>
      <img src={resume} alt="Resume" className="resume-image"/>
      <a href={resume} download="My_Resume.jpg" className="download-button">
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
