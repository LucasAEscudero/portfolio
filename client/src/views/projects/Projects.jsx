import Fade from "react-awesome-reveal";
import { IoLogoGithub } from "react-icons/io";

import projects from "../../utils/projects.json";

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
          {projects?.map((project) => (
            <div
              key={project.id}
              className="card rounded-3 p-0 mb-2"
              style={{
                maxWidth: "20rem",
                backgroundColor: "#1a365d",
              }}
            >
              <a
                href={
                  project.links.deploy
                    ? project.links.deploy
                    : project.links.youtube
                }
                target="_blank"
              >
                <img
                  src={projectImages[project.var]}
                  alt={`${project.title} Image`}
                  className="rounded-top-3"
                  style={{ minWidth: "100%", maxWidth: "300px" }}
                />
              </a>
              {/* </div> */}
              <div
                className="card-body p-1"
                styles={{ backgroundColor: "#1a365d" }}
              >
                <div className="card-title" styles={{ backgroundColor: "" }}>
                  <h3 className="float-start text-white">{project.title}</h3>
                  <a
                    href={project.links.github}
                    target="_blank"
                    className="float-end pt-1"
                  >
                    <IoLogoGithub size={30} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
