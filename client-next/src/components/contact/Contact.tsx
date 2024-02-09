"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { FaPaperPlane } from "react-icons/fa";
import { sendEmail } from "@/lib/actions";
import { successNotification, errorNotification } from "../notification";

import Title from "../title/Title";
import SubmitButton from "../SubmitButton";

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection } = useActiveSectionContext();

  useEffect(() => {
    if (inView) setActiveSection("Contacto");
  }, [inView, setActiveSection]);

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="p-2 rounded-md w-[min(100%,38rem)] md:!scroll-mt-[5rem] !scroll-mt-[7.5rem] m-auto"
      id="contact"
    >
      <Title text="Contactame!" marginBottom={3} />
      <p className="text-center">
        Contactame directamente a{" "}
        <a className="underline" href="mailto:lucasescudero5629@gmail.com">
          lucasescudero5629@gmail.com
        </a>{" "}
        o a traves de este formulario.
      </p>

      <form
        className="flex flex-col gap-3 mt-3"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error)
            errorNotification("Escribe una direccion de correo valida.");
          else if (data)
            successNotification("El email fue enviado correctamente!");
          else errorNotification("Ha ocurrido un error.");
        }}
      >
        <input
          type="email"
          name="email"
          className="container outline-none h-8 rounded-lg p-1"
          required
          maxLength={500}
          placeholder="Tu email"
        />
        <textarea
          name="message"
          required
          id=""
          cols={30}
          rows={10}
          className="container outline-none p-1"
          placeholder="Tu mensaje"
        ></textarea>
        <SubmitButton />
      </form>
    </motion.section>
  );
}
