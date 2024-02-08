import Profile from "@/components/profile/Profile";
import Projects from "@/components/projects/Projects";
import Technologies from "@/components/technologies/Technologies";
import Formation from "@/components/formation/Formation";
import Contact from "@/components/contact/Contact";
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
