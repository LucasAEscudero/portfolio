import Link from "next/link";
import { TFormation } from "@/lib/types";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function FormationItems({
  formation: { title, academy, description, certificate, status },
  i,
}: {
  formation: TFormation;
  i: number;
}) {
  return (
    <motion.tr
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: i * 0.2 }}
      className={clsx("p-[1em] md:p-0 md:border-t", {
        "border-t-[1px] mb-3": i !== 0,
      })}
    >
      <td className="p-1" data-title="Titulo">
        {title}
      </td>
      <td className="p-1" data-title="Academia">
        {academy}
      </td>
      <td className="p-1  md:text-start" data-title="Descripcion">
        {description}
      </td>
      <td className="p-1" data-title="Estado">
        {status}
      </td>
      {certificate ? (
        <td className="p-1" data-title="Certificado">
          <Link
            href={
              certificate.includes("http")
                ? certificate
                : `/certificate/${certificate}.pdf`
            }
            className="flex justify-center items-center hover:scale-110"
            target="_blank"
          >
            <FaExternalLinkAlt />
          </Link>
        </td>
      ) : (
        <td className="p-1" data-title="Certificado">
          -
        </td>
      )}
    </motion.tr>
  );
}
