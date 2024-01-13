import Fade from "react-awesome-reveal";
import useGet from "../../hooks/useGet";
import { useEffect, useState } from "react";

import ProjectCard from "../../components/projectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    useGet({ url: "./src/utils/projects.json", setFunction: setProjects });
  }, []);

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
            />
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default Projects;
