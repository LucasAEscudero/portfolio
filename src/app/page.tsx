import Profile from "@/components/Profile";
import Projects from "@/components/Projects";
import Technologies from "@/components/Technologies";
import Formation from "@/components/Formation";
import Contact from "@/components/Contact";
import SectionSeparator from "@/components/SectionSeparator";

export default function Home() {
  return (
    <>
      <Profile />
      <Projects />
      <SectionSeparator />
      <Technologies />
      <SectionSeparator />
      <Formation />
      <SectionSeparator />
      <Contact />
    </>
  );
}
