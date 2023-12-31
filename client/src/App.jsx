import { useState } from "react";

import Nav from "./views/nav/Nav";

import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import Profile from "./views/profile/Profile";
import Technologies from "./views/technologies/Technologies";
import Projects from "./views/projects/Projects";
import Contact from "./views/contact/Contact";
// import Hobbies from "./views/hobbies/Hobbies";
import Curriculum from "./views/curriculum/Curriculum";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Profile />
      <Curriculum />
      <Technologies />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
