import Profile from "@/components/profile/Profile";
import Projects from "@/components/projects/Projects";
import Technologies from "@/components/technologies/Technologies";
import Formation from "@/components/formation/Formation";
import Contact from "@/components/contact/Contact";

export default function Home() {
  return (
    <>
      <Profile />

      <Projects />
      <Technologies />
      <Formation />
      <Contact />
    </>
  );
}
