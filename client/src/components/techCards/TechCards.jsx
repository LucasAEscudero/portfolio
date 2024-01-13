import { Fade } from "react-awesome-reveal";
import TechCard from "../techCard/TechCard";

const TechCards = ({ technologies }) => {
  return (
    <div className="d-flex flex-wrap justify-content-center mt-1">
      <Fade cascade triggerOnce>
        {technologies?.map((technology, i) => (
          <TechCard key={i} name={technology?.name} image={technology?.image} />
        ))}
      </Fade>
    </div>
  );
};

export default TechCards;
