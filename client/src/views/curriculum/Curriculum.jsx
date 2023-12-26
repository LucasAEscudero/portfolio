const Curriculum = () => {
  return (
    <div className="container-fluid">
      <div className="mt-4 mb-4">
        <h2 className="fs-4">
          Si esta interesado en mi perfil, no dude en decargar mi CV desde el
          siguiente boton!
        </h2>
        <div className="d-flex justify-content-center">
          <a href="#" download>
            <button type="button" class="btn btn-outline-primary">
              Descargue mi CV aqui!
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
