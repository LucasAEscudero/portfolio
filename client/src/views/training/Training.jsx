import cv from "../../utils/CV - Escudero Lucas.pdf";
import training from "../../utils/training.json";

import TrainingCard from "../../components/trainingCard/TrainingCard";

import { PiCertificateLight } from "react-icons/pi";

import Fade from "react-awesome-reveal";

const Training = () => {
  return (
    <div className="container py-3" id="training">
      <div className="row">
        <h2>Formacion</h2>
      </div>
      <div className="row my-3 justify-content-center">
        <div>
          <a
            href={cv}
            target="_blank"
            className="btn btn-primary"
            role="button"
            style={{ textDecoration: "none" }}
          >
            Ver curriculum
          </a>
        </div>
      </div>
      <div className="row m-0 p-0 justify-content-center gap-3">
        {training?.map((formation) => (
          <TrainingCard
            title={formation.title}
            academy={formation.academy}
            description={formation.description}
            certificate={formation.certificate}
            date={formation.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Training;
