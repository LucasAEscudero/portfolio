import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getTechnologies,
  getProjects,
  getTraining,
} from "./redux/actions/actions";

import Home from "./views/home/Home";

import "./App.css";
import "bootswatch/dist/cosmo/bootstrap.min.css";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getTechnologies());
      await dispatch(getProjects());
      await dispatch(getTraining());
    })();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
