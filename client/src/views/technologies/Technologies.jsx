import TechCards from "../../components/techCards/TechCards";
// import technologies from "../../utils/technologies.json";
import { useSelector } from "react-redux";

import "./Technologies.css";

const Technologies = () => {
  const { technologies } = useSelector((state) => state);

  return (
    <div className="container py-3 my-2" id="technologies">
      <h2 className="fs-2">Tecnologias</h2>
      <div className="container mt-3">
        {/* front */}
        <div className="row d-flex flex-wrap justify-content-center mt-2">
          <h3>Frontend</h3>
          <TechCards
            technologies={technologies.filter(
              (tech) => tech?.type === "frontend"
            )}
          />
        </div>
        {/* back */}
        <div className="border my-3"></div>
        <div className="row d-flex flex-wrap justify-content-center mt-2">
          <h3>Backend</h3>
          <TechCards
            technologies={technologies.filter(
              (tech) => tech.type === "backend"
            )}
          />
        </div>
        <div className="border my-3"></div>
        <div className="row d-flex flex-wrap justify-content-center mt-2">
          <h3>DevOps</h3>
          <TechCards
            technologies={technologies.filter((tech) => tech.type === "devops")}
          />
        </div>
        {technologies.find((tech) => tech.type === "learning") && (
          <div className="border my-3"></div>
        )}
        {technologies.find((tech) => tech.type === "learning") && (
          <div className="row d-flex flex-wrap justify-content-center mt-2">
            <h3>¿Que estoy aprendiendo?</h3>
            <TechCards
              technologies={technologies.filter(
                (tech) => tech.type === "learning"
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Technologies;
