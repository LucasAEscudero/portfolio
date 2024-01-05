import { useState } from "react";

import Nav from "./views/nav/Nav";

import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import { Toaster, toast } from "react-hot-toast";
import Profile from "./views/profile/Profile";
import Technologies from "./views/technologies/Technologies";
import Projects from "./views/projects/Projects";
import Contact from "./views/contact/Contact";
// import Hobbies from "./views/hobbies/Hobbies";
import Curriculum from "./views/curriculum/Curriculum";

function App() {
  // const [notification, setNotification] = useState(false);

  // const handlerNotification = (event) => {
  //   // setNotification(true);
  //   console.log(event.target.value);
  //   toast(`El ${event.target.innerHTML} ha sido copiado con exito`);
  // };

  return (
    <>
      <Nav />
      <Profile />
      <Curriculum />
      <Technologies />
      <Projects />
      <Contact />
      <Toaster />
    </>
  );
}

export default App;
