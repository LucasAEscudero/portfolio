const TechCard = ({ name, icon }) => {
  return (
    <div className="d-flex flex-column align-items-center mx-3">
      <img
        src={icon}
        alt={name}
        style={{
          minWidth: "100px",
          maxHeight: "100px",
        }}
      />
      <h4>{name}</h4>
    </div>
  );
};

export default TechCard;
