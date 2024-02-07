"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-2 py-1 border-t-[1px]" id="contact">
      <h2 className="text-center text-lg">Contacto: </h2>
      <div className="flex justify-center space-x-2 mt-2">
        <Link
          href="https://www.linkedin.com/in/lucas-escudero-54195322b/"
          target="_blank"
          className="hover:text-blue-700 flex justify-center"
        >
          <FaLinkedin size={25} className="mr-1" /> LinkedIn
        </Link>
        <Link
          href="https://github.com/LucasAEscudero"
          target="_blank"
          className="hover:text-[#1c1917] flex justify-center"
        >
          <FaGithub size={25} className="mr-1" /> GitHub
        </Link>
      </div>
    </footer>
  );
}
