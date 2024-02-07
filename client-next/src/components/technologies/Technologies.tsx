import technologies from "@/utils/technologies.json";
import TechnologyCard from "../technologyCard/TechnologyCard";
import { TTechnology } from "@/lib/types";

export default function Technologies() {
  return (
    <section className="p-5 rounded-md" id="container">
      <h2 className="text-3xl text-center">Tecnologias</h2>
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
      <article className="my-3">
        <h3 className="text-2xl text-center mb-2">Herramientas</h3>
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
    </section>
  );
}
