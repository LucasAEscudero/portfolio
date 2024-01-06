import { Fade } from "react-awesome-reveal";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

import Nav from "../nav/Nav";
import Profile from "../profile/Profile";
import Technologies from "../technologies/Technologies";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Curriculum from "../curriculum/Curriculum";

import "./Home.css";

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  return (
    <div
      className={`${isDarkMode ? "bg-dark text-white" : ""}`}
      data-theme={isDarkMode}
    >
      <Nav isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <Profile isDarkMode={isDarkMode} />
      <div className="container">
        <Curriculum />
        <Technologies />
        <Projects />
      </div>
      <Contact isDarkMode={isDarkMode} />
      <Toaster />
    </div>
  );
};

export default Home;
