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
          <ul class="navbar-nav me-auto">
            <li class="nav-item">
              <a class="nav-link active" href="#profile">
                Perfil
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#curriculum">
                Curriculum
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#technologies">
                Tecnologias
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="#projects">
                Proyectos
                <span class="visually-hidden">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
