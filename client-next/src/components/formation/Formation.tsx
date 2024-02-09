"use client";
import formationjson from "@/utils/formation.json";
import FormationItems from "../formationItems/FormationItems";
import Title from "../title/Title";
import { TFormation } from "@/lib/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect, useState } from "react";

import "./Formation.css";

export default function Formation() {
  const [formation, setFormation] = useState<TFormation[]>([]);

  useEffect(() => {
    if (formationjson) setFormation([...formationjson]);
  }, []);

  const { ref, inView } = useInView({});
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Formacion");
  }, [inView, setActiveSection]);

  return (
    <section
      ref={ref}
      className="my-8 py-4 flex justify-center flex-col md:mx-15 md:!scroll-mt-[5rem] !scroll-mt-[7.5rem]"
      id="formation"
    >
      <Title text="Formacion" marginBottom={3} />
      <Link
        href="/CV - Escudero Lucas.pdf"
        target="_blank"
        id="button"
        className="p-2 rounded-xl m-auto my-3"
      >
        Ver curriculum
      </Link>
      <table
        className="container text-start md:text-center mt-3 w-full md:border"
        id="container"
      >
        <thead>
          <tr className="p-[1em] mb-[1em]">
            <th className="p-1">Titulo</th>
            <th className="p-1">Academia</th>
            <th className="p-1">Descripcion</th>
            <th className="p-1">Progreso</th>
            <th className="p-1">Certificado</th>
          </tr>
        </thead>
        <tbody>
          {formation?.map((form: TFormation, i: number) => (
            <FormationItems key={`${form.title}-${i}`} formation={form} i={i} />
          ))}
        </tbody>
      </table>
    </section>
  );
}
