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
    <Fade>
      <div className="container-fluid py-3" id="projects">
        <div className="row">
          <h2>Proyectos</h2>
        </div>
        <div className="row justify-content-md-center align-items-start gap-3">
          {projects?.map((project) => (
            <div
              key={project?.id}
              className="col-4 p-0 border border-3 rounded-3 position-relative pb-1"
              id={styles.projectCard}
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
                  alt={project?.title}
                  style={{
                    minWidth: "100%",
                    maxWidth: "300px",
                  }}
                  className="rounded-top-3"
                />
              </a>
              <div
                className="d-flex justify-content-between postion-absolute rounded-buttom-3 mt-1 p-1"
                id={styles.projectLinks}
              >
                <h3
                  style={{ zIndex: 100 }}
                  className="text-white bottom-0"
                  id={styles.titleProject}
                >
                  {project?.title}
                </h3>
                <div className="rounded-buttom-3">
                  {project?.links?.github && (
                    <a
                      href={project.links.github}
                      className="p-1"
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <IoLogoGithub size={30} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
