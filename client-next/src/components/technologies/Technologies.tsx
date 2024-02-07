import technologies from "@/utils/technologies.json";
import TechnologyCard from "../technologyCard/TechnologyCard";
import { TTechnology } from "@/lib/types";

export default function Technologies() {
  return (
    <section className="p-5 rounded-md" id="technologies">
      <h2 className="text-3xl text-center mb-3">Tecnologias</h2>
      <div className="container px-3">
        <article className="my-3">
          <h3 className="text-2xl text-center mb-2">Frontend</h3>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {technologies?.map((technology: TTechnology, i: number) => {
              if (technology.type === "frontend")
                return (
                  <TechnologyCard
                    key={`${technology.name}-${i}`}
                    technology={technology}
                  />
                );
            })}
          </div>
        </article>
        <div className="border-t my-5"></div>
        <article className="my-3">
          <h3 className="text-2xl text-center mb-2">Backend</h3>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {technologies?.map((technology: TTechnology, i: number) => {
              if (technology.type === "backend")
                return (
                  <TechnologyCard
                    key={`${technology.name}-${i}`}
                    technology={technology}
                  />
                );
            })}
          </div>
        </article>
        <div className="border-t my-5"></div>
        <article className="my-3">
          <h3 className="text-2xl text-center mb-2">DevTools</h3>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {technologies?.map((technology: TTechnology, i: number) => {
              if (technology.type === "tool")
                return (
                  <TechnologyCard
                    key={`${technology.name}-${i}`}
                    technology={technology}
                  />
                );
            })}
          </div>
        </article>
        <div className="border-t my-5"></div>
        <article className="my-3">
          <h3 className="text-2xl text-center mb-2">Aprendiendo</h3>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {technologies?.map((technology: TTechnology, i: number) => {
              if (technology.type === "learn")
                return (
                  <TechnologyCard
                    key={`${technology.name}-${i}`}
                    technology={technology}
                  />
                );
            })}
          </div>
        </article>
      </div>
    </section>
  );
}
