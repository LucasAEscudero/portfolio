"use client";
import technologies from "@/utils/technologies.json";
import TechnologyCard from "../technologyCard/TechnologyCard";
import Title from "../title/Title";
import { TTechnology } from "@/lib/types";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

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
    </motion.section>
  );
}
