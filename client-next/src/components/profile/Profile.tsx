"use client";
import Image from "next/image";
import profileImage from "@/assets/Portfolio-Profile.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Profile() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Perfil");
  }, [inView, setActiveSection]);

  return (
    <section ref={ref} className="!scroll-mt-[100rem] mb-[5rem]" id="profile">
      {/* <Image
        src={profileImage}
        alt="Imagen de perfil"
        width={200}
        height={200}
        className="rounded-full"
        quality={95}
        priority={true}
      />
      <div>
        <h2 className="title text-xl">Quien soy?</h2>
        <p>
          Soy un Desarrollador Web FullStack en constante crecimiento,
          comprometido con la innovación y preparado para abordar nuevos
          desafíos. Mi enfoque se basa en ofrecer soluciones web modernas y
          eficientes. Mi conjunto de habilidades incluye un fuerte pensamiento
          analítico, disciplina y dedicación, respaldados por una gran capacidad
          para analizar y resolver problemas. Además, mi habilidad para trabajar
          en equipo complementa mi enfoque proactivo para alcanzar objetivos de
          manera colaborativa.
        </p>
      </div> */}
      <motion.div
        className="flex items-center justify-center"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween", duration: 0.2 }}
      >
        <Image
          src={profileImage}
          alt="Imagen de perfil"
          width={180}
          height={180}
          className="rounded-full"
          quality={95}
          priority={true}
        />
      </motion.div>
      <motion.p
        className="text-xl mt-3 text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hola! Soy Lucas Escudero</span>
        <br /> Fullstack Developer y estudiante de Ing. en Informatica.
      </motion.p>

      <motion.div
        className="mt-[5rem] text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h2 className="text-3xl text-center">Sobre mi</h2>
        <p className="text-md">
          Soy una persona en constante crecimiento, comprometido con la
          innovación y preparado para abordar nuevos desafíos. Mi enfoque se
          basa en ofrecer soluciones web modernas y eficientes. Mi conjunto de
          habilidades incluye un fuerte pensamiento analítico, disciplina y
          dedicación, respaldados por una gran capacidad para analizar y
          resolver problemas. Además, mi habilidad para trabajar en equipo
          complementa mi enfoque proactivo para alcanzar objetivos de manera
          colaborativa.
        </p>
      </motion.div>
    </section>
  );
}
