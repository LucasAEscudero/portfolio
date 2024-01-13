import { Routes, Route } from "react-router-dom";

import Home from "./views/home/Home";

import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
