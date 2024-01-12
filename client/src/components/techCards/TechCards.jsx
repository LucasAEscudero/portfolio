import { Fade } from "react-awesome-reveal";
import TechCard from "../techCard/TechCard";

// import html from "../../assets/technologiesIcons/html.png";
// import css from "../../assets/technologiesIcons/css.png";
// import javascript from "../../assets/technologiesIcons/javascript.png";
// import react from "../../assets/technologiesIcons/react.png";
// import redux from "../../assets/technologiesIcons/redux.png";
// import nodejs from "../../assets/technologiesIcons/nodejs.png";
// import express from "../../assets/technologiesIcons/express.png";
// import postgresql from "../../assets/technologiesIcons/postgresql.png";
// import sequelize from "../../assets/technologiesIcons/sequelize.png";
// import git from "../../assets/technologiesIcons/git.png";
// import jira from "../../assets/technologiesIcons/jira.png";
// import vsc from "../../assets/technologiesIcons/vsc.png";
// import bootstrap from "../../assets/technologiesIcons/bootstrap.png";
// import typescript from "../../assets/technologiesIcons/typescript.png";
// import mongodb from "../../assets/technologiesIcons/mongodb.png";

const TechCards = ({ technologies }) => {
  // const icons = {
  //   html,
  //   css,
  //   javascript,
  //   react,
  //   vite: "https://es.vitejs.dev/logo.svg",
  //   redux,
  //   nodejs,
  //   express,
  //   postgresql,
  //   sequelize,
  //   git,
  //   jira,
  //   vsc,
  //   bootstrap,
  //   typescript,
  //   mongodb,
  // };

  return (
    <div className="d-flex flex-wrap justify-content-center mt-1">
      <Fade cascade triggerOnce>
        {technologies?.map((technology, i) => (
          <TechCard
            key={i}
            name={technology?.name}
            image={technology?.image}
            // icon={icons[technology?.name.toLowerCase()]}
          />
        ))}
      </Fade>
    </div>
  );
};

export default TechCards;
