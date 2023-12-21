// const technologies = require("./technologies.json");
import technologies from "./technologies.json";

const Technologies = () => {
  console.log(technologies);
  return (
    <div className="container-fluid">
      <h2>Tecnologias</h2>
      <div className="row">
        <h2>Frontend</h2>
        <div className="row">
          {technologies?.map((technology) => {
            if (technology?.types === "frontend")
              return (
                <div key={technology?.id} className="col-2">
                  <img src={technology?.icon} alt={technology?.name} />
                  <h3>{technology?.name}</h3>
                </div>
              );
          })}
        </div>
      </div>
      <div>
        <h2>Backend</h2>
      </div>
      <div>
        <h2>Base de Datos</h2>
      </div>
    </div>
  );
};

export default Technologies;
