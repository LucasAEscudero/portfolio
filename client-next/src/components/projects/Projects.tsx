import projects from "@/utils/projects.json";
import ProjectCard from "../projectCard/ProjectCard";
import { TProject } from "@/utils/types";

export default function Projects() {
  return (
    <section className="my-3">
      <h2 className="text-3xl text-center">Proyectos</h2>
      <div>
        {projects?.map((project: TProject, i: number) => (
          <ProjectCard key={`${project.title}-${i}`} project={project} />
        ))}
      </div>
    </section>
  );
}
