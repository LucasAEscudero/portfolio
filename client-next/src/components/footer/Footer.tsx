"use client";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-10 mb-5 px-4 text-center" id="contact">
      <small className="mb-2 text-xs block">
        &copy; 2024 Lucas. Todos los derechos reservados.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre este sitio web:</span> creado con
        React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting{" "}
      </p>
    </footer>
  );
}
