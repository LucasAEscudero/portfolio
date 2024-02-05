const ProjectTechCard = ({ name, icon }) => {
  return (
    <div
      className="rounded-pill px-2 py-1 m-1 d-flex justify-content-between align-items-center"
      style={{ backgroundColor: "var(--background-shading-color)" }}
    >
      <img
        src={icon}
        alt={`${name} icon`}
        style={{ maxWidth: "2.5em", maxHeight: "1em", marginRight: "7.5px" }}
        className="mr-3"
      />
      <h5 className="mb-0">{name}</h5>
    </div>
  );
};

export default ProjectTechCard;
