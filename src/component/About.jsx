/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import photo from "../assets/mine.jpeg";
import { Github, Linkedin, Mail } from "lucide-react"; // Correct import
import "../css/About.css";
import classNames from "classnames";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <motion.h2
          className="about-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About <span className="about-title-highlight">Me</span>
        </motion.h2>

        <div className="about-grid">
          <motion.div
            className="about-photo-container"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="about-photo-wrapper">
              <img src={photo} alt="Profile Photo" className="about-photo" />
            </div>
          </motion.div>

          <motion.div
            className="about-text-container"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.h1
              className="about-heading"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <span className="about-heading-frontend">FrontEnd </span>
              <span className="about-heading-developer">Developer</span>
            </motion.h1>

            <motion.p
              className="about-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              I am a passionate frontend developer specializing in creating
              responsive and user-friendly web applications. With experience in
              HTML, CSS, JavaScript, and modern frameworks like React, I strive
              to build seamless digital experiences.
            </motion.p>

            <div className="about-info-grid">
              <motion.div
                className="about-info-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="about-info-title">Background</h3>
                <p className="about-info-text">
                  Frontend developer with a focus on React, JavaScript, and
                  UI/UX design.
                </p>
              </motion.div>

              <motion.div
                className="about-info-item"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="about-info-title">Location</h3>
                <p className="about-info-text">
                  Based in Nepal, available for remote, hybrid, and on-site
                  work.
                </p>
              </motion.div>
            </div>

            <motion.div
              className="about-actions-container"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <motion.a
                href="/resume" 
                className="about-action-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Resume
              </motion.a>

              <motion.div
                className="about-social-container"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <motion.a
                  href="https://github.com/Saraswoti13"
                  className="about-social-icon"
                  target="_blank"
                  rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
                  whileHover={{ scale: 1.2 }}
                >
                  <Github />
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/saraswotishrestha/"
                  className="about-social-icon"
                  target="_blank"
                  rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
                  whileHover={{ scale: 1.2 }}
                >
                  <Linkedin />
                </motion.a>

                <motion.a
                  href="mailto:sthasumitra83@gmail.com"
                  className="about-social-icon"
                  target="_blank"
                  rel="noopener noreferrer" // Add rel="noopener noreferrer" for security
                  whileHover={{ scale: 1.2 }}
                >
                  <Mail />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
