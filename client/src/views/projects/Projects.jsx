import Fade from "react-awesome-reveal";
import { FaYoutube } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

import projects from "../../utils/projects.json";

import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <Fade>
      <div className="containter-fluid m-1">
        <div className="row">
          <h2>Proyectos</h2>
          <div className="row justify-content-md-center">
            {projects?.map((project) => (
              <div
                key={project?.id}
                className="col-2 p-0 bg-secondary border border-3 rounded-3 position-relative"
                style={{ width: "33%" }}
              >
                <img
                  src={project?.image}
                  alt={project?.title}
                  style={{
                    minWidth: "100%",
                    maxWidth: "300px",
                    // minHeight: "50%",
                  }}
                  className="rounded-top-3"
                />
                <div className="d-flex justify-content-between postion-absolute bg-secondary rounded-buttom-3">
                  <h3
                    style={{ zIndex: 100 }}
                    className="text-white bottom-0"
                    id={styles.titleProject}
                  >
                    {project?.title}
                  </h3>
                  <div className="p-2 rounded-buttom-3">
                    {project?.links?.github && (
                      <a href={project.links.github} className="p-1">
                        <FaGithub />
                      </a>
                    )}
                    {project?.links?.deploy && (
                      <a href={project?.links?.deploy} className="p-1">
                        🌐
                      </a>
                    )}
                    {project?.links?.youtube && (
                      <a href={project.links.youtube} className="p-1">
                        <FaYoutube />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
