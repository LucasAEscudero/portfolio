const ProjectTechCard = ({ name, icon }) => {
  return (
    <div className="border rounded-pill px-2 py-1 m-1 d-flex justify-content-between align-items-center">
      <img
        src={icon}
        alt={`${name} icon`}
        style={{ maxWidth: "2.5em", maxHeight: "1em" }}
        className="mr-3"
      />
      <h5 className="mb-0">{name}</h5>
    </div>
  );
};

export default ProjectTechCard;
