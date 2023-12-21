import technologies from "../../utils/technologies.json";

const Technologies = () => {
  return (
    <div className="container-fluid">
      <h2>Tecnologias</h2>
      <div className="row">
        <h2>Frontend</h2>
        <div className="row justify-content-md-center">
          {technologies?.map((technology) => {
            if (technology?.types === "frontend")
              return (
                <div
                  key={technology?.id}
                  className="col-2 p-2"
                  style={{ width: "20%" }}
                >
                  <img
                    src={technology?.icon}
                    alt={technology?.name}
                    style={{
                      minWidth: "50%",
                      maxWidth: "220px",
                      // minHeight: "50%",
                    }}
                  />
                  <h3>{technology?.name}</h3>
                </div>
              );
          })}
        </div>
      </div>
      <div>
        <h2>Backend</h2>
        <div className="row justify-content-md-center">
          {technologies?.map((technology) => {
            if (technology?.types === "backend")
              return (
                <div
                  key={technology?.id}
                  className="col-2 p-2"
                  style={{ width: "20%" }}
                >
                  <img
                    src={technology?.icon}
                    alt={technology?.name}
                    style={{
                      minWidth: "50%",
                      maxWidth: "220px",
                    }}
                  />
                  <h3>{technology?.name}</h3>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
