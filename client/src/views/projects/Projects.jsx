import Fade from "react-awesome-reveal";
import { IoLogoGithub } from "react-icons/io";

import projects from "../../utils/projects.json";
import ProjectCard from "../../components/projectCard/ProjectCard";

//images
import rickandmorty from "../../assets/projectsAssets/RickandMorty.jpeg";
import videogames from "../../assets/projectsAssets/Videogames.png";
import cer03 from "../../assets/projectsAssets/Cer03.jpeg";

import styles from "./Projects.module.css";

const Projects = () => {
  const projectImages = {
    rickandmorty,
    videogames,
    cer03,
  };

  return (
    <div className="container py-3" id="projects">
      <div className="row">
        <h2>Proyectos</h2>
      </div>
      <div className="row">
        <Fade className="col" cascade triggerOnce>
          {projects?.map((project, i) => (
            <ProjectCard
              key={i}
              title={project?.title}
              show={
                project.links.deploy
                  ? project.links.deploy
                  : project.links.youtube
              }
              varName={project?.var}
              github={project.links?.github}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
