"use client";
import { useRouter } from "next/navigation";
import { BsList } from "react-icons/bs";
import { useState } from "react";

import NavItems from "../navItems/NavItems";

export default function Nav() {
  const router = useRouter();
  const [isResponsive, setIsResponsive] = useState(false);

  const toggleIsResponsive = (): void => {
    setIsResponsive(!isResponsive);
  };

  return (
    <header>
      <nav className="flex justify-between md:justify-center items-center h-12 relative mx-2">
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
      )}
    </header>
  );
}
