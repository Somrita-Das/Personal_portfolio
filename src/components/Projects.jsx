import React from 'react';
import './Projects.css';

const projectsData = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website to showcase my skills and projects. Built with React and designed with a modern dark theme.',
    tags: ['React', 'CSS', 'JavaScript', 'UI/UX'],
    githubLink: '#',
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with product listings, a shopping cart, and a checkout process. MERN stack.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB'],
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A simple and intuitive task management application to help users organize their daily tasks and improve productivity.',
    tags: ['React', 'Firebase', 'Material-UI'],
    githubLink: '#',
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, index) => (
            <span key={index}>{tag}</span>
          ))}
        </div>
        <div className="project-buttons">
          <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="projects container section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;