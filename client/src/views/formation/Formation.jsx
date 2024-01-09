import cv from "../../utils/CV - Escudero Lucas.pdf";
import training from "../../utils/training.json";

import FormationCard from "../../components/formationCard/FormationCard";

import Fade from "react-awesome-reveal";

import "./Formation.css";

const Formation = () => {
  return (
    <div className="container py-3" id="formation">
      <div className="row">
        <h2 style={{ color: "var(--text-antiBackground)" }}>Formacion</h2>
      </div>
      <div className="row my-3 justify-content-center">
        <Fade cascade triggerOnce>
          <div>
            <a
              href={cv}
              target="_blank"
              className="btn rounded-3"
              role="button"
              id="cvButton"
            >
              Ver curriculum
            </a>
          </div>
        </Fade>
      </div>
      <div className="row m-0 p-0 container justify-content-center gap-2">
        <Fade className="col-xl-4 col-md-12" cascade triggerOnce>
          {training?.map((formation) => (
            <FormationCard
              title={formation.title}
              academy={formation.academy}
              description={formation.description}
              certificate={formation.certificate}
              date={formation.date}
            />
          ))}
        </Fade>
      </div>
    </div>
  );
};

export default Formation;
