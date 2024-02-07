import { TFormation } from "@/lib/types";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";

import "./FormationItems.css";

export default function FormationItems({
  formation: { title, academy, description, certificate, status },
  index,
}: {
  formation: TFormation;
  index: number;
}) {
  return (
    <tr
      className={`p-[1em] md:p-0 md:border-t ${
        index !== 0 && "border-t-[1px] mb-3"
      }`}
    >
      {/* {index !== 0 && <div className="border-t-[1px] mb-3 md:hidden"></div>} */}
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
              certificate.includes("http") ? certificate : `/${certificate}.pdf`
            }
            className="flex justify-center items-center hover:text-[#1a365d]"
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
    </tr>
  );
}
