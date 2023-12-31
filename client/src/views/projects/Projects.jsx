import Fade from "react-awesome-reveal";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaNetworkWired } from "react-icons/fa";

import projects from "../../utils/projects.json";

import styles from "./Projects.module.css";

const Projects = () => {
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
              className="col-4 p-0 bg-secondary border border-3 rounded-3 position-relative pb-1"
            >
              <img
                src={project?.image}
                alt={project?.title}
                style={{
                  minWidth: "100%",
                  maxWidth: "300px",
                }}
                className="rounded-top-3"
              />
              <div
                className="d-flex justify-content-between postion-absolute bg-secondary rounded-buttom-3 mt-1 p-1"
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
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project?.links?.deploy && (
                    <a
                      href={project.links.deploy}
                      className="p-1"
                      target="_blank"
                    >
                      <FaNetworkWired />
                    </a>
                  )}
                  {project?.links?.youtube && (
                    <a
                      href={project.links.youtube}
                      className="w-25"
                      target="_blank"
                    >
                      <FaYoutube />
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
