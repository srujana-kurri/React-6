import React, { useState } from 'react';
import './Projects.css';

const projectsData = [
  { id: 1, title: 'Local Service Search Portal', description: 'This is a software project done by me during my Btech 2nd year, which helps users to find the services that they are looking for(like Hospitals, Shopping Malls,.. ) in the nearest possible location to them. This project is done as a group of 3 members. It is an user friendly application.' },
  { id: 2, title: 'Smart Knee brace', description: 'This project was created by me as part of my engineering clinics, which monitors the deformations and movements of the knee and sends an alert to the user. Hence, he/she can take any medical actions (if necessary) immediately. This project was built with a team of 6 members.' },
  
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    
    <div>
      <section id="projects">
      <h2 className="projects-heading">Projects</h2>
      <p className='projects-p'>Here are some projects that I worked on</p>
      <div className="projects-box">
        <div className="projects-navbar">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className={`project-nav-item ${selectedProject === project ? 'active' : ''}`}
              onClick={() => setSelectedProject(project)}
            >
              {project.title}
            </div>
          ))}
        </div>
        <div className="project-info">
          {selectedProject && (
            <div className="project-card">
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.description}</p>
            </div>
          )}
        </div>
      </div>
      </section>
    </div>
   
  );
  
};


export default Projects;
