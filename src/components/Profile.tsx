"use client";
import Image from "next/image";
import profileImage from "@/assets/Portfolio-Profile.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaArrowRight, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import Link from "next/link";

import Title from "./Title";

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
        className="flex justify-center gap-3 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        {/* buttons */}
        <Link
          type="button"
          href="#contact"
          className="button group flex gap-2 items-center"
        >
          Contactame aca!{" "}
          <FaArrowRight className="transition-all group-hover:translate-x-1" />
        </Link>
        <Link
          type="button"
          href="/CV - Escudero Lucas.pdf"
          target="_blank"
          className="button flex gap-2 items-center"
        >
          Ver CV <MdDownload size={20} />
        </Link>
        <Link
          type="button"
          href="https://www.linkedin.com/in/lucas-escudero-54195322b/"
          target="_blank"
          className="button group flex gap-2 items-center"
        >
          <FaLinkedin size={20} />
        </Link>
        <Link
          type="button"
          href="https://github.com/LucasAEscudero"
          target="_blank"
          className="button flex gap-2 items-center"
        >
          <FaGithub size={20} />
        </Link>
      </motion.div>

      <motion.div
        className="mt-[5rem] text-center"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Title text="Sobre mi" marginBottom={3} />
        <p className="text-md mt-2 sm:mx-[10rem]">
          Soy una persona con un ferviente deseo de explorar y expandir mis
          habilidades en el vasto universo de la informática, con un enfoque que
          se centra en la mejora continua y en ofrecer soluciones web modernas y
          eficientes. Mi conjunto de habilidades incluye un fuerte pensamiento
          analítico, disciplina y dedicación, respaldados por una gran capacidad
          para analizar y resolver problemas. Además, mi habilidad para trabajar
          en equipo complementa mi enfoque proactivo para alcanzar objetivos de
          manera colaborativa.
        </p>
      </motion.div>
    </section>
  );
}
