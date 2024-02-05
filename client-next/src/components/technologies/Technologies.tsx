import technologies from "@/utils/technologies.json";
import TechnologyCard from "../technologyCard/TechnologyCard";
import { TTechnology } from "@/utils/types";

export default function Technologies() {
  return (
    <section>
      <h2 className="text-3xl text-center">Technologies</h2>
      <div>
        {technologies?.map((technology: TTechnology, i: number) => (
          <TechnologyCard
            key={`${technology.name}-${i}`}
            technology={technology}
          />
        ))}
      </div>
    </section>
  );
}
