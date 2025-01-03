import React, { useState } from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpeg";
import SpotifyImage from "../../assets/SpotifyImage.png";
import DrawingApp from "../../assets/drawing_App.png";
import { Button } from "@mui/material";
import DetailDialog from "./DetailDialog.jsx";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "TO DO Application",
    github: "https://github.com/ksm007/AngularToDo",
    demo: "https://angulartodo-ecdd5.web.app/login",
    content: `This application is a simple todo application that allows users to create, update, and delete tasks. 
      There is user authentication implemented using firebase APIs and various filters for users to view their tasks. 
      Users can also delete already done tasks. It is a web application that is built using Angular and Angular Material.`,
  },
  {
    id: 2,
    image: SpotifyImage,
    title: "Spotify Clone with Chat Application",
    github: "https://github.com/ksm007/Spotify-Clone",
    demo: "https://spotify-clone-gi9v.onrender.com/",
    content: `A feature-rich Spotify clone integrated with a real-time chat functionality. 
      Users can browse music, create playlists, and communicate with other users through the chat system.`,
  },
  {
    id: 3,
    image: DrawingApp,
    title: "Smart Drawing Application",
    github: "https://github.com/ksm007/draawingApp",
    demo: "https://google.com",
    content: `A drawing application that allows users to draw and find solutions to their problems. This is implemented using Gemini API with image processing. The user can draw on the canvas and the result is displayed in unique format that is easy to read. This can solve any problem from math to trigonometry to physics and also give explaination to any abstract concept.`,
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpenDialog = (project) => {
    setSelectedProject(project);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProject(null);
  };

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map((project) => (
          <article key={project.id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src={project.image}
                alt={project.title}
                className="portfolio__item-image"
              />
            </div>
            <h3>{project.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={project.github}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={project.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
              <a
                variant="contained"
                color="primary"
                onClick={() => handleOpenDialog(project)}
                className="btn btn-secondary"
              >
                View Details
              </a>
            </div>
          </article>
        ))}
      </div>

      {selectedProject && (
        <DetailDialog
          open={isDialogOpen}
          onClose={handleCloseDialog}
          title={selectedProject.title}
          content={selectedProject.content}
          image={selectedProject.image}
        />
      )}
    </section>
  );
};

export default Portfolio;
