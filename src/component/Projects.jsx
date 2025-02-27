/* eslint-disable no-unused-vars */
import React from 'react';
import photo1 from "../assets/projectimages/project1image.png";
import photo2 from "../assets/projectimages/project2image.png";
import photo3 from "../assets/projectimages/project3image.png";
import { ExternalLink } from 'lucide-react';
import "../css/Projects.css"; 

const Projects = () => {
  const projects = [
    {
      title: "PawPals",
      description: "Developed dynamic, responsive, and interactive static web using Figma designs. Implemented HTML and CSS.",
      techStack: ['HTML5', 'CSS3'],
      githubLink: "https://github.com",
      image: photo1
    },
    {
      title: "VojanExpress",
      description: "Designed and built user-friendly web interfaces using HTML, CSS and JavaScript . Improved website accessibility, ensuring compliance with WCAG standards.",
      techStack: ['JavaScript', 'HTML', 'Tailwind Css', 'Django', 'Firebase'],
      githubLink: "https://github.com",
      image: photo2
    },
    {
      title: "NamasteNepal",
      description: "Built and maintained scalable back-end systems using Node.js and Express. Designed and optimized database schemas in MongoDB and PostgreSQL to improve query performance.",
      techStack: ['Figma'],
      githubLink: "https://github.com",
      image: photo3
    }
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">
          Featured <span className="projects-title-highlight">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              {/* Image Section */}
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
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
                {/* Your Project Link */}
                <a href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link">
                  View Project <ExternalLink className="project-link-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;