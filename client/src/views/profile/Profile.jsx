import Fade from "react-awesome-reveal";

const Profile = () => {
  return (
    <Fade>
      <div
        className="container-fluid py-3 bg-primary bg-gradient w-100"
        id="profile"
      >
        <div className="row">
          <div className="col-4">
            <img
              className="w-100 border border-dark rounded-circle"
              src="/src/assets/Portfolio-Profile.jpg"
              alt="Profile photo"
            />
          </div>
          <div className="col-8 d-flex flex-column align-items-start justify-content-center">
            <h1>Lucas Escudero</h1>
            <div className="d-flex flex-column align-content-start">
              <p className="text-start fs-5">
                Soy un Desarrollador Web FullStack en constante crecimiento y
                estudiante del primer año de la carrera de Ingeniería en
                Informática.
              </p>
              <p className="text-start fs-5">
                Mi enfoque se centra en la mejora continua, por lo que
                actualmente me encuentro explorando tecnologías como Typescript,
                Bootstrap y MongoDB.
              </p>
              <p className="text-start fs-5">
                Estoy totalmente comprometido con la innovación, estoy listo
                para enfrentar nuevos desafíos y ofrecer soluciones web modernas
                y eficientes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Profile;
