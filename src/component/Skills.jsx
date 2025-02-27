/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaFigma,
} from "react-icons/fa";
import {
  SiTypescript,
  SiRedux,
  SiMongodb,
  SiAdobephotoshop,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { motion } from "framer-motion";
import "../css/Skills.css";

const Skills = () => {
    const containerVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      };
      const skillVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.4,
            ease: "easeInOut",
          },
        },
      };    
  return (
    <section id="skills" className="skills-section">
    <motion.div
      className="skills-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h2 className="skills-title">SKILLS</h2>
      <div className="skills-grid">
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <FaHtml5 className="skill-icon" />
          <p>HTML5</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <FaCss3Alt className="skill-icon" />
          <p>CSS3</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <FaJsSquare className="skill-icon" />
          <p>JavaScript</p>
        </motion.div>
      </div>
      <div className="skills-grid">
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <SiTypescript className="skill-icon" />
          <p>TypeScript</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <FaReact className="skill-icon" />
          <p>React</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <SiRedux className="skill-icon" />
          <p>Redux</p>
        </motion.div>
      </div>
      <div className="skills-grid">
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <FaPython className="skill-icon" />
          <p>Python</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <FaNodeJs className="skill-icon" />
          <p>Node.JS</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <SiMongodb className="skill-icon" />
          <p>MongoDB</p>
        </motion.div>
      </div>
      <div className="skills-grid">
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <BiLogoPostgresql className="skill-icon" />
          <p>SQL</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <SiAdobephotoshop className="skill-icon" />
          <p>Photoshop</p>
        </motion.div>
        <motion.div
          className="skill"
          variants={skillVariants}
          whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
        >
          <FaFigma className="skill-icon" />
          <p>Figma</p>
        </motion.div>
      </div>
    </motion.div>
  </section>
);
};

export default Skills;