import { TProject } from "@/utils/types";

interface Props {
  project: TProject;
}

export default function ProjectCard({ project }: Props) {
  return (
    <article>
      <h2>{project.title}</h2>
    </article>
  );
}
