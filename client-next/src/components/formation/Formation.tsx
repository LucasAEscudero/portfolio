"use client";
import formation from "@/utils/formation.json";
import FormationItems from "../formationItems/FormationItems";
import { TFormation } from "@/lib/types";
// import CV from "@/utils/CV - Escudero Lucas";
import Link from "next/link";

import "./Formation.css";

export default function Formation() {
  return (
    <section className="my-8 py-4 flex justify-center flex-col border-t">
      <h2 className="text-3xl text-center">Formacion</h2>
      <Link
        href="/CV - Escudero Lucas.pdf"
        target="_blank"
        id="button"
        className="curriculum p-2 rounded-xl m-auto my-3"
        // className="p-2 rounded-xl hover:text-[#1a365d] hover:bg-[#1a365d]"
      >
        Ver curriculum
      </Link>
      <table
        className="text-start md:text-center mt-3 w-full md:border"
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
            <FormationItems
              key={`${form.title}-${i}`}
              formation={form}
              index={i}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}
