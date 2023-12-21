import projects from "../../utils/projects.json";

const Projects = () => {
  return (
    <div className="containter-fluid">
      <h2>Projects</h2>
      <div>
        {projects?.map((project) => {
          return (
            <div>
              <img src={project?.image} alt={project?.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
