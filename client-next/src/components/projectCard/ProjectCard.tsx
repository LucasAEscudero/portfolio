import { TProject } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub, FaYoutube } from "react-icons/fa";

import "./ProjectCard.css";

interface Props {
  project: TProject;
}

export default function ProjectCard({
  project: {
    title,
    image,
    resume,
    technologies,
    date,
    links: { github, deploy, youtube },
    tags: { collaborators, academy },
  },
}: Props) {
  return (
    <article className="card m-3 rounded-md transition-all min-h-[250px] border-2">
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
        </div>
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
        <div className="flex justify-between items-center">
          <h5>{date}</h5>
          <div className="flex gap-2">
            <Link
              href={github}
              target="_blank"
              id="button"
              className="p-1"
              title="Repositorio"
            >
              <FaGithub size={25} />
            </Link>
            {youtube && (
              <Link
                href={youtube}
                target="_blank"
                id="button"
                className="p-1"
                title="Video de muestra"
              >
                <FaYoutube size={25} />
              </Link>
            )}
            {deploy && (
              <Link
                href={deploy}
                target="_blank"
                id="button"
                className="p-1 px-2 flex items-center"
                title="Deploy"
              >
                <span className="mr-2 hidden md:inline-block">Deploy</span>
                <FaExternalLinkAlt size={20} />
              </Link>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
