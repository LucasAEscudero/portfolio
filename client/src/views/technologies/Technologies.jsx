import TechCards from "../../components/techCards/TechCards";

import technologies from "../../utils/technologies.json";

const Technologies = () => {
  return (
    <div className="container py-3 my-2" id="technologies">
      <h2 className="fs-2">Tecnologias</h2>
      <div className="container mt-3">
        {/* front */}
        <div className="row d-flex flex-wrap justify-content-center mt-2">
          <h3>Frontend</h3>
          <TechCards
            technologies={technologies.filter(
              (tech) => tech.types === "frontend"
            )}
          />
        </div>
        {/* back */}
        <div className="border my-3"></div>
        <div className="row d-flex flex-wrap justify-content-center mt-2">
          <h3>Backend</h3>
          <TechCards
            technologies={technologies.filter(
              (tech) => tech.types === "backend"
            )}
          />
        </div>
        <div className="border my-3"></div>
        <div className="row d-flex flex-wrap justify-content-center mt-2">
          <h3>DevOps</h3>
          <TechCards
            technologies={technologies.filter(
              (tech) => tech.types === "devops"
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
