import cv from "../../utils/CV - Escudero Lucas.pdf";

import Fade from "react-awesome-reveal";

const Curriculum = () => {
  return (
    <div className="container-fluid py-3" id="curriculum">
      <div className="mt-4 mb-4">
        <Fade cascade triggerOnce>
          <h2 className="fs-4">
            Si estas interesado en mi perfil, no dudes en decargar mi CV desde
            el siguiente boton!
          </h2>
          <div className="d-flex justify-content-center">
            <a
              href={cv}
              download="CV - Escudero Lucas"
              style={{ color: "transparent", backgroundColor: "transparent" }}
            >
              <button type="button" class="btn btn-outline-primary">
                Descargue mi CV aqui!
              </button>
            </a>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Curriculum;
