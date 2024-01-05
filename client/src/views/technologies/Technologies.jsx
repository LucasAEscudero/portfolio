import Fade from "react-awesome-reveal";

import technologies from "../../utils/technologies.json";

const Technologies = () => {
  return (
    <Fade>
      <div className="container-fluid py-3" id="technologies">
        <h2>Tecnologias</h2>
        <div className="d-flex justify-content-center">
          <table>
            <thead>
              <th className="border border-primary fs-3">Frontend</th>
              <th className="border border-primary fs-3">Backend</th>
            </thead>
            <tbody>
              <td className="border border-primary w-50">
                <div className="d-flex flex-wrap justify-content-center">
                  {technologies?.map((technology) => {
                    if (technology?.types === "frontend")
                      return (
                        <div
                          key={technology?.id}
                          className="col-2 p-2 d-inline m-3 d-flex flex-column align-items-center"
                          style={{ width: "20%" }}
                        >
                          <img
                            src={technology.icon}
                            alt={technology?.name}
                            style={{
                              // minWidth: "10%",
                              maxWidth: "150px",
                              // minHeight: "50%",
                            }}
                          />
                          <h3>{technology?.name}</h3>
                        </div>
                      );
                  })}
                </div>
              </td>
              <td className="border border-top-0 border-start-0 border-primary d-flex flex-wrap">
                <div className="d-flex flex-wrap justify-content-center">
                  {technologies?.map((technology) => {
                    if (technology?.types === "backend")
                      return (
                        <div
                          key={technology?.id}
                          className="col-2 p-2 d-inline m-3 d-flex flex-column align-items-center"
                          style={{ width: "20%" }}
                        >
                          <img
                            src={technology?.icon}
                            alt={technology?.name}
                            style={{
                              // minWidth: "50%",
                              maxWidth: "150px",
                            }}
                          />
                          <div>
                            <h3>{technology?.name}</h3>
                          </div>
                        </div>
                      );
                  })}
                </div>
              </td>
            </tbody>
          </table>
        </div>
      </div>
    </Fade>
  );
};

export default Technologies;
