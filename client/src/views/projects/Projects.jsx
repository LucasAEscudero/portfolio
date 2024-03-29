import Fade from "react-awesome-reveal";
import projects from "../../utils/projects.json";

import ProjectCard from "../../components/projectCard/ProjectCard";

const Projects = () => {
  return (
    <section className="container py-3" id="projects">
      <div className="row">
        <h2 style={{ color: "var(--text-antiBackground)" }}>Proyectos</h2>
      </div>
      <div className="row">
        <Fade cascade triggerOnce>
          {projects?.map((project, i) => (
            <ProjectCard
              key={i}
              title={project?.title}
              varName={project?.varName}
              description={project.description}
              role={project?.role}
              technologies={project.technologies}
              youtube={project.links?.youtube}
              deploy={project.links?.deploy}
              github={project.links?.github}
              date={project?.date}
              image={project?.image}
            />
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
