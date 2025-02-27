/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import photo1 from "../assets/projectimages/project1image.png";
import photo2 from "../assets/projectimages/project2image.png";
import photo3 from "../assets/projectimages/project3image.png";
import photo4 from "../assets/projectimages/project4image.webp";
import photo5 from "../assets/projectimages/project5image.png";
import { ExternalLink } from 'lucide-react';
import "../css/Projects.css"; 

const Projects = () => {
  const projects = [
    {
      title: "PawPals",
      description: "Developed dynamic, responsive, and interactive static web using Figma designs. Implemented HTML and CSS.",
      techStack: ['HTML5', 'CSS3'],
      githubLink: "https://github.com/Saraswoti13/Website-Devlopment",
      image: photo1
    },
    {
      title: "VojanExpress",
      description: "Designed and built user-friendly web interfaces using HTML, CSS and JavaScript . Improved website accessibility, ensuring compliance with WCAG standards.",
      techStack: ['JavaScript', 'HTML', 'Tailwind Css', 'Django', 'Firebase'],
      githubLink: "https://github.com/Saraswoti13/Canteen-Management-System ",
      image: photo2
    },
    {
      title: "NamasteNepal",
      description: "Developed and maintained website layout and design using Figma. Ensured website functionality and responsiveness.",
      techStack: ['Figma'],
      githubLink: "#",
      image: photo3
    },
    {
      title: "Hospital Management System",
      description: "Built hospital management system using Python. Implemented CRUD operations for patients, doctors, and staff.",
      techStack: ['Python'],
      githubLink: "https://github.com/saraswoti13/Hospital-Management-System ",
      image: photo4
    },
    {
      title: "Personal Portfolio",
      description: "Developed dynamic, responsive portfolio using React. Implemented React Router for navigation.",
      techStack: ['React', 'JavaScript', 'HTML', 'CSS'],
      githubLink: "https://github.com/saraswoti13/Personal_Portfolio",
      image: photo5
    },
  ];

  return (
    <motion.section
    id="projects"
    className="projects-section"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      <h2 className="projects-title">
        Featured <span className="projects-title-highlight">Projects</span>
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Image Section */}
            <div className="project-image-container">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                className="project-image"
                whileHover={{ scale: 1.05 }}
              />
              <div className="project-image-overlay"></div>
            </div>
            <div className="project-content">
              <h3 className="project-title-text">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech-stack">
                {project.techStack.map((tech) => (
                  <span key={tech} className="project-tech-badge">{tech}</span>
                ))}
              </div>
              {/* Project Link */}
              <motion.a 
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                whileHover={{ scale: 1.1 }}
              >
                View Project <ExternalLink className="project-link-icon" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.section>
);
};

export default Projects;