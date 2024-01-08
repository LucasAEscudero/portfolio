import Fade from "react-awesome-reveal";
import { IoLogoGithub } from "react-icons/io";

import projects from "../../utils/projects.json";
import ProjectCard from "../../components/projectCard/ProjectCard";

const Projects = () => {
  return (
    <div className="container py-3" id="projects">
      <div className="row">
        <h2>Proyectos</h2>
      </div>
      <div className="row">
        <Fade className="" cascade triggerOnce>
          {projects?.map((project, i) => (
            <ProjectCard
              key={i}
              title={project?.title}
              varName={project?.var}
              description={project.description}
              role={project?.role}
              technologies={project.technologies}
              youtube={project.links?.youtube}
              deploy={project.links?.deploy}
              github={project.links?.github}
              date={project.date}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Projects;
