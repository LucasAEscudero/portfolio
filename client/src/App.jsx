import { useState } from "react";

import Nav from "./views/nav/Nav";

import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";
import Profile from "./views/profile/Profile";
import Technologies from "./views/technologies/Technologies";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Profile />
      <Technologies />
    </>
  );
}

export default App;
