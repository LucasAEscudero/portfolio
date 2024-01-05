import NavItem from "../../components/navItem/NavItem";

import "./Nav.css";

const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg bg-primary w-100 border-primary"
      data-bs-theme="dark"
      id="navBar"
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
            {/* <NavItem key={"perfil"} name={"Perfil"} link={"#profile"} /> */}
            <NavItem
              key={"curriculum"}
              name={"Curriculum"}
              link={"#curriculum"}
            />
            <NavItem
              key={"tecnologias"}
              name={"Tecnologias"}
              link={"#technologies"}
            />
            <NavItem key={"proyectos"} name={"Proyectos"} link={"#projets"} />
            <NavItem key={"contacto"} name={"Contacto"} link={"#contact"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
