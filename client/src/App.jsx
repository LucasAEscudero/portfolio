import { useState } from "react";

import Nav from "./views/nav/Nav";

import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import { Toaster, toast } from "react-hot-toast";
import Profile from "./views/profile/Profile";
import Technologies from "./views/technologies/Technologies";
import Projects from "./views/projects/Projects";
import Contact from "./views/contact/Contact";
import Curriculum from "./views/curriculum/Curriculum";
import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <>
      <Nav />
      <Fade cascade triggerOnce>
        <Profile />
        <div className="container">
          <Curriculum />
          <Technologies />
          <Projects />
        </div>
      </Fade>
      <Contact />
      <Toaster />
    </>
  );
}

export default App;
