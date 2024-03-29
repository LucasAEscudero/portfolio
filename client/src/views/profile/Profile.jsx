// import face from "../../assets/Portfolio-Profile.jpg";
// import face from "https://drive.google.com/file/d/1sPFoqOscBKk5iJjovdYSuUvg7qjXnfFO/view?usp=sharing";
import Fade from "react-awesome-reveal";
// console.log(face);

import "./Profile.css";

const Profile = () => {
  return (
    <div className={`container-fluid py-3 w-100`} id="profile">
      <div className="row">
        <div className="col-md-12 col-xl-4">
          <Fade triggerOnce>
            <img
              className="rounded-circle"
              src="https://res.cloudinary.com/dub4acwkh/image/upload/v1705019505/Portfolio-Profile_yok9rx.jpg"
              alt="Profile photo"
              style={{ maxWidth: "300px" }}
            />
          </Fade>
        </div>
        <div className="col-md-12 col-xl-8 containter d-flex flex-column justify-content-center">
          <Fade cascade triggerOnce className="text-md-center text-xl-start">
            <h1>Lucas Agustin Escudero</h1>
            {/* texto largo */}
            <p className="fs-5">
              Soy un <strong>Desarrollador Web FullStack</strong> en constante
              crecimiento, comprometido con la innovación y preparado para
              abordar nuevos desafíos. Mi enfoque se basa en ofrecer soluciones
              web modernas y eficientes.
            </p>
            <p className="fs-5">
              Mi conjunto de habilidades incluye un fuerte pensamiento
              analítico, disciplina y dedicación, respaldados por una gran
              capacidad para analizar y resolver problemas. Además, mi habilidad
              para trabajar en equipo complementa mi enfoque proactivo para
              alcanzar objetivos de manera colaborativa.
            </p>
            {/* texto breve */}
            {/* <p className="fs-5">
              Soy un Desarrollador Web FullStack en constante crecimiento,
              comprometido con la innovación y preparado para abordar nuevos
              desafíos, con el enfoque de ofrecer soluciones web modernas y
              eficientes.
            </p> */}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Profile;
