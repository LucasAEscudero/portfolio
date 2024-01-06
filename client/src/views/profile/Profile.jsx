import face from "../../assets/Portfolio-Profile.jpg";
import Fade from "react-awesome-reveal";

const Profile = ({ isDarkMode }) => {
  return (
    <div
      className={`container-fluid py-3 w-100`}
      id="profile"
      style={{ backgroundColor: `${!isDarkMode ? "#3b82f6" : "#1a365d"}` }}
    >
      <div className="row">
        <div className="col-4">
          <Fade triggerOnce>
            <img
              className="w-100 rounded-circle"
              src={face}
              alt="Profile photo"
            />
          </Fade>
        </div>
        <div className="col-8 d-flex flex-column align-items-start justify-content-center">
          <Fade cascade triggerOnce>
            <h1>Lucas Escudero</h1>
            <p className="text-start fs-5">
              Soy un Desarrollador Web FullStack en constante crecimiento y
              estudiante del primer año de la carrera de Ingeniería en
              Informática.
            </p>
            <p className="text-start fs-5">
              Mi enfoque se centra en la mejora continua, por lo que actualmente
              me encuentro explorando tecnologías como Typescript, Bootstrap y
              MongoDB.
            </p>
            <p className="text-start fs-5">
              Estoy totalmente comprometido con la innovación, estoy listo para
              enfrentar nuevos desafíos y ofrecer soluciones web modernas y
              eficientes.
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Profile;
