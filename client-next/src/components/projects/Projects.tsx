import projects from "@/utils/projects.json";
import ProjectCard from "../projectCard/ProjectCard";
import { TProject } from "@/lib/types";

export default async function Projects() {
  return (
    <section className="my-3">
      <h2 className="text-3xl text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-3">
        {projects?.map((project: TProject, i: number) => (
          <ProjectCard key={`${project.title}-${i}`} project={project} />
        ))}
      </div>
    </section>
  );
}
