"use client";
import { BsList } from "react-icons/bs";
import { motion } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";

import NavItems from "../navItems/NavItems";
import { Span } from "next/dist/trace";
import { useActiveSectionContext } from "@/context/active-section-context";

export const links = [
  {
    name: "Perfil",
    hash: "#profile",
  },
  {
    name: "Proyectos",
    hash: "#projects",
  },
  {
    name: "Tecnologias",
    hash: "#technologies",
  },
  {
    name: "Formacion",
    hash: "#formation",
  },
  {
    name: "Contacto",
    hash: "#contact",
  },
] as const;

export default function Nav() {
  const [isResponsive, setIsResponsive] = useState<boolean>(false);

  const toggleIsResponsive = (): void => {
    setIsResponsive(!isResponsive);
  };

  const { activeSection, setActiveSection } = useActiveSectionContext();

  return (
    <header className="z-[999] relative mb-[7.5rem] sm:mb-[5rem]">
      {/* <nav className="flex justify-between md:justify-center items-center h-12 relative mx-2">
        <div className="flex items-center gap-8">
          <ul className="hidden md:flex md:gap-4">
            <NavItems name="Perfil" link="#profile" />
            <NavItems name="Proyectos" link="#projects" />
            <NavItems name="Formacion" link="#formation" />
            <NavItems name="Tecnologias" link="#technologies" />
            <NavItems name="Contacto" link="#contact" />
          </ul>
        </div>
        <div className="mx-2 cursor-pointer md:hidden flex items-center">
          <button
            onClick={toggleIsResponsive}
            className={`${
              isResponsive && "text-xl"
            } rounded-full hover:bg-slate-300 p-2`}
          >
            {isResponsive ? "X" : <BsList size={25} />}
          </button>
        </div>
      </nav>
      {isResponsive && (
        <div className="flex flex-rows justify-center mb-4 md:hidden">
          <ul className="flex flex-col gap-3">
            <NavItems name="Perfil" link="#profile" />
            <NavItems name="Projectos" link="#projects" />
            <NavItems name="Formacion" link="#formation" />
            <NavItems name="Tecnologias" link="#technologies" />
            <NavItems name="Contacto" link="#contact" />
          </ul>
        </div>
      )} */}
      <motion.div
        className="container fixed top-0 left-1/2 -translate-x-1/2 h-[6rem] sm:h-[2.6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:w-[36rem] sm:rounded-full"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="fixed left-1/2 h-12 -translate-x-1/2 py-2 sm:h-[initial] sm:py-0">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5 text-[#737373]">
            {links.map((link) => (
              <motion.li
                className="h-3/4 flex items-center justify-center my-1 relative"
                key={`${link.name}`}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                onClick={() => setActiveSection(link.name)}
              >
                <Link
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-1 hover:text-white transition",
                    {
                      "text-white": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                >
                  {link.name}

                  {link.name === activeSection && (
                    <motion.span
                      className="container rounded-full absolute inset-0 -z-10"
                      layoutId="active"
                      transition={{
                        type: "spring",
                        stiffness: 38,
                        damping: 30,
                      }}
                    ></motion.span>
                  )}
                </Link>
              </motion.li>
            ))}
          </ul>
          {/* responsive button */}
          {/* <div className="md:hidden mt-0">
            <ul className="flex items-center">
              <li className="rounded-full hover:scale-105">
                <button onClick={() => toggleIsResponsive()}>
                  <BsList size={25} />
                </button>
              </li>
            </ul>
          </div> */}
        </nav>
        {/* {isResponsive && (
          <div className="container relative top-[2.5rem]">
            <ul className=" flex flex-col w-full flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-[#737373]">
              {links.map((link) => (
                <motion.li
                  className="h-3/4 flex items-center justify-center my-1 relative"
                  key={`${link.name}`}
                  initial={{ y: -100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  onClick={() => setActiveSection(link.name)}
                >
                  <Link
                    className={clsx(
                      "flex w-full items-center justify-center px-3 py-1 hover:text-white transition",
                      {
                        "text-white": activeSection === link.name,
                      }
                    )}
                    href={link.hash}
                  >
                    {link.name}

                    {link.name === activeSection && (
                      <motion.span
                        className="container rounded-full absolute inset-0 -z-10"
                        layoutId="active"
                        transition={{
                          type: "spring",
                          stiffness: 38,
                          damping: 30,
                        }}
                      ></motion.span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
        )} */}
      </motion.div>
    </header>
  );
}
