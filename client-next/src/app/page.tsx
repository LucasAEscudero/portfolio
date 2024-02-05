import Image from "next/image";

import Profile from "@/components/profile/Profile";
import Projects from "@/components/projects/Projects";
import Technologies from "@/components/technologies/Technologies";
import Formation from "@/components/formation/Formation";

export default function Home() {
  return (
    <>
      <div className="h-[90vh] flex justify-center items-center mb-2">
        <h2 className="text-3xl">Hola, soy Lucas Escudero!</h2>
      </div>
      <Profile />
      <Projects />
      <Technologies />
      <Formation />
    </>
  );
}
