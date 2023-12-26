const Profile = () => {
  return (
    <div className="container-fluid p-3 bg-primary bg-gradient">
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
              Soy un Desarrollador Web FullStack a la que le apasiona aprender y
              seguir creciendo dentro del gran mundo de la informática, con el
              objetivo de especializarme en lo que me apasiona: el backend.
            </p>
            <p className="text-start fs-5">
              Actualmente, me encuentro estudiando la carrera de Ingeniería en
              Informática para dedicarme de lleno al mundo de la computación en
              un futuro.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
