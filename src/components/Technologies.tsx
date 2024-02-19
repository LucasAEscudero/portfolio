"use client";
import { useEffect } from "react";
import { TTechnology } from "@/lib/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import technologies from "@/lib/technologies.json";
import TechnologyCard from "./TechnologyCard";
import TechnologyCards from "./TechnologyCards";
import Title from "./Title";

export default function Technologies() {
  const { ref, inView } = useInView();
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Tecnologias");
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      className="p-5 rounded-md md:!scroll-mt-[5rem] !scroll-mt-[7.5rem]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="technologies"
    >
      <Title text="Tecnologias" marginBottom={3} />
      <div className="flex flex-wrap gap-2 justify-center">
        <TechnologyCards
          title="Frontend"
          technologies={technologies.filter(
            (technology) => technology.type === "frontend"
          )}
        />
        <TechnologyCards
          title="Backend"
          technologies={technologies.filter(
            (technology) => technology.type === "backend"
          )}
        />
        <TechnologyCards
          title="Herramientas"
          technologies={technologies.filter(
            (technology) => technology.type === "tool"
          )}
        />
        <TechnologyCards
          title="Aprendiendo"
          technologies={technologies.filter(
            (technology) => technology.type === "learn"
          )}
        />
      </div>
    </motion.section>
  );
}
