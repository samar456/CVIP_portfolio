import React from "react";
import ProjectCard from "./ProjectCard";
import './Projects.css'
import portfolio from './assets/portfolio.png'
import todo from './assets/todo.png'
import codeeditor from './assets/codeeditor.png'
import netclone from './assets/netclone.png'
import filesharing from './assets/filesharing.png'

const Projects = () => {

  const projects = [
        {
      imageSrc: portfolio,
      title: "Portfolio Website",
      overview: "A Portfolio Website having Skills,projects,contact and About section",
      githubLink: "https://github.com/samar456/portfolio",
    },
    {
      imageSrc: todo,
      title: "To-Do (React.Js)",
      overview: "A React.js To-Do List App",
      githubLink: "https://github.com/samar456/todo",
    },

        {
      imageSrc: codeeditor,
      title: " Code Editor",
      overview: "A real-time React.js code editor built using API",
      githubLink: "https://github.com/samar456/CVIP_CODE_EDITOR",
    },

    {
      imageSrc: netclone,
      title: "Netflix Clone",
      overview: "A Netflix Clone (HTML,CSS,Js)",
      githubLink: "https://github.com/samar456/CVIP_netflix_clone",
    },

    

    {
      imageSrc: filesharing,
      title: "File Sharing App",
      overview: "A Full-Stack file sharing App using MERN stack",
      githubLink: "https://github.com/samar456/File-Sharing",
    }
  ];

  return (
    <div className="main">
      <div className="project-container">
        {projects.map((project, index) => (
          <ProjectCard  {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
