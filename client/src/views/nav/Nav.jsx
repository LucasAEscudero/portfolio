import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

import NavItem from "../../components/navItem/NavItem";

import "./Nav.css";

const Nav = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav
      class="navbar navbar-expand-lg w-100 border-buttom-primary"
      data-bs-theme="dark"
      id="navBar"
      style={{ backgroundColor: `${isDarkMode ? "#102f5c" : "#336fd6"}` }}
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Lucas Escudero
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav me-auto">
            <NavItem key={"perfil"} name={"Perfil"} link={"#profile"} />
            <NavItem key={"training"} name={"Formacion"} link={"#training"} />
            <NavItem
              key={"tecnologias"}
              name={"Tecnologias"}
              link={"#technologies"}
            />
            <NavItem key={"proyectos"} name={"Proyectos"} link={"#projects"} />
            <NavItem key={"contacto"} name={"Contacto"} link={"#contact"} />
          </ul>
          <div>
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              sunColor="white"
              // size={120}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
