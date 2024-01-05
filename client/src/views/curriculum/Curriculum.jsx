import cv from "../../utils/CV - Escudero Lucas.pdf";

import Fade from "react-awesome-reveal";

const Curriculum = () => {
  return (
    <div className="container-fluid py-3" id="curriculum">
      <div className="mt-4 mb-4">
        <Fade>
          <h2 className="fs-4">
            Si esta interesado en mi perfil, no dude en decargar mi CV desde el
            siguiente boton!
          </h2>
        </Fade>
        <div className="d-flex justify-content-center">
          <Fade>
            <a
              href={cv}
              download="CV - Escudero Lucas"
              style={{ color: "transparent", backgroundColor: "transparent" }}
            >
              <button type="button" class="btn btn-outline-primary">
                Descargue mi CV aqui!
              </button>
            </a>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
