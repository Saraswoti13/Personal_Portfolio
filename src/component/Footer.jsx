/* eslint-disable no-unused-vars */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../css/Footer.css"; // Import the external CSS file


const Footer = () => {
  return (
    <footer className="footer">
      <motion.div className="footer-divider">
        <motion.div className="footer-content">
          <p>2025 Saraswoti Shrestha. All rights reserved. Privacy</p>
        </motion.div>
        <motion.div
          className="footer-social-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/Saraswoti13"
            className="footer-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faGithub} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/saraswotishrestha/"
            className="footer-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </motion.a>

          <motion.a
            href="mailto:sthasumitra83@gmail.com"
            className="footer-social-icon"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
          >
            <FontAwesomeIcon icon={faEnvelope} />
          </motion.a>
        </motion.div>
      </motion.div>
    </footer>
  );
};

export default Footer;