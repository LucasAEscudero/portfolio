import { PiCertificateLight } from "react-icons/pi";

import "./TrainingCard.css";

const TrainingCard = ({ title, academy, description, certificate, date }) => {
  return (
    <div
      className="card rounded-3 m-0 p-0 col-md-12 col-xl-4"
      id="formation-card"
    >
      <div className="card-header rounded-top-3" id="formation-header">
        {academy}
      </div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div
        className="card-footer d-flex justify-content-between flex-wrap rounded-bottom-3"
        id="formation-footer"
      >
        <p>{date}</p>
        {certificate && (
          <a href={certificate} target="_blank" id="certificate">
            <PiCertificateLight size={30} /> Certificado
          </a>
        )}
      </div>
    </div>
  );
};

export default TrainingCard;
