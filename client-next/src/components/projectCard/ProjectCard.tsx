import { TProject } from "@/lib/types";
import Image from "next/image";
import "./ProjectCard.css";

interface Props {
  project: TProject;
}

export default function ProjectCard({
  project: { title, image, resume, technologies },
}: Props) {
  return (
    <article
      className="m-3 rounded-md transition-all min-h-[250px] border-2"
      id="container"
    >
      <Image
        src={image}
        alt={`${title} - image`}
        width={300}
        height={50}
        className="rounded-t w-full max-h-[250px]"
      />
      <div className="m-4">
        <div>
          <h2 className="text-xl">{title}</h2>
          <p>{resume}</p>
          <ul className="flex gap-2 flex-wrap justify-center my-2">
            {technologies?.map((technology) => (
              <li
                key={`${title}-${technology}`}
                className="technology bg-stone-900 backdrop-blur-md rounded-full px-2"
              >
                {technology}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
