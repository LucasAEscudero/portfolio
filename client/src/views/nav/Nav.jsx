import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import "./Nav.css";

const Nav = ({ isDarkMode, toggleDarkMode }) => {
  const [collapse, setCollapse] = useState(false);

  const toggleCollapse = () => setCollapse(!collapse);

  return (
    <nav className="navbar navbar-expand-lg" id="navBar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" id="nav-text">
          Lucas Escudero
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#menu"
          aria-controls="menu"
          aria-expanded="true"
          aria-label="Toggle navigation"
          onClick={toggleCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={
            collapse
              ? "navbar-collapse collapse show"
              : "navbar-collapse collapse"
          }
          id="menu"
        >
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#profile" id="nav-text">
                Perfil
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formation" id="nav-text">
                Formacion
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#technologies" id="nav-text">
                Tecnologias
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects" id="nav-text">
                Proyectos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" id="nav-text">
                Contacto
              </a>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li>
              <DarkModeSwitch
                checked={isDarkMode}
                onChange={toggleDarkMode}
                sunColor="#fff"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
