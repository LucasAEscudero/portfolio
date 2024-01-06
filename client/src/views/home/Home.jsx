import { Fade } from "react-awesome-reveal";
import { Toaster } from "react-hot-toast";

import Nav from "../nav/Nav";
import Profile from "../profile/Profile";
import Technologies from "../technologies/Technologies";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Curriculum from "../curriculum/Curriculum";

const Home = () => {
  return (
    <>
      <Nav />
      <Profile />
      <div className="container">
        <Curriculum />
        <Technologies />
        <Projects />
      </div>
      <Contact />
      <Toaster />
    </>
  );
};

export default Home;
