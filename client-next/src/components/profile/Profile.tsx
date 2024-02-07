import Image from "next/image";
import profileImage from "@/assets/Portfolio-Profile.jpg";

export default function Profile() {
  return (
    <section
      className="card flex gap-2 border rounded-xl p-3 my-3"
      id="profile"
    >
      <Image
        src={profileImage}
        alt="Imagen de perfil"
        width={200}
        height={200}
        className="rounded-full"
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
      </div>
    </section>
  );
}
