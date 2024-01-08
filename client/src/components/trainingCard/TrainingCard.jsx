import { PiCertificateLight } from "react-icons/pi";

const TrainingCard = ({ title, academy, description, certificate, date }) => {
  return (
    <div className="card border-primary m-0 p-0 col-md-12 col-xl-4">
      <div className="card-header">{academy}</div>
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
      </div>
      <div className="card-footer d-flex justify-content-between flex-wrap">
        <p>{date}</p>
        {certificate && (
          <a href={certificate} target="_blank">
            <PiCertificateLight size={30} /> Certificado
          </a>
        )}
      </div>
    </div>
  );
};

export default TrainingCard;
