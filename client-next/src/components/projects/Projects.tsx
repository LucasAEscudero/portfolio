"use client";
import projects from "@/utils/projects.json";
import ProjectCard from "../projectCard/ProjectCard";
import Title from "../title/Title";
import { TProject } from "@/lib/types";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Projects() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    console.log("proyectos");
    if (inView) setActiveSection("Proyectos");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="my-3 md:mx-[125px] md:!scroll-mt-[5rem] !scroll-mt-[7.5rem]"
      id="projects"
    >
      <Title text="Proyectos" />
      <div className="grid grid-cols-1 md:grid-cols-2 items-start gap-3 mt-2">
        {projects?.map((project: TProject, i: number) => (
          <ProjectCard key={`${project.title}-${i}`} project={project} i={i} />
        ))}
      </div>
    </section>
  );
}
