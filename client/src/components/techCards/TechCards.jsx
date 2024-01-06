import { Fade } from "react-awesome-reveal";
import TechCard from "../techCard/TechCard";

import iconHtml from "../../assets/technologiesIcons/html.png";
import iconCss from "../../assets/technologiesIcons/css.png";
import iconJavascript from "../../assets/technologiesIcons/javascript.png";
import iconReact from "../../assets/technologiesIcons/react.png";
import iconRedux from "../../assets/technologiesIcons/redux.png";
import iconNodejs from "../../assets/technologiesIcons/nodejs.png";
import iconExpress from "../../assets/technologiesIcons/express.png";
import iconPostgresql from "../../assets/technologiesIcons/postgresql.png";
import iconSequelize from "../../assets/technologiesIcons/sequelize.png";
import iconGit from "../../assets/technologiesIcons/git.png";
import iconJira from "../../assets/technologiesIcons/jira.png";

const TechCards = ({ technologies }) => {
  const icons = {
    html: iconHtml,
    css: iconCss,
    javascript: iconJavascript,
    react: iconReact,
    vite: "https://es.vitejs.dev/logo.svg",
    redux: iconRedux,
    nodejs: iconNodejs,
    express: iconExpress,
    postgresql: iconPostgresql,
    sequelize: iconSequelize,
    git: iconGit,
    jira: iconJira,
  };

  return (
    <div className="d-flex flex-wrap justify-content-center mt-1">
      <Fade cascade triggerOnce>
        {technologies?.map((technology, i) => (
          <TechCard
            key={i}
            name={technology?.name}
            icon={icons[technology?.name.toLowerCase()]}
          />
        ))}
      </Fade>
    </div>
  );
};

export default TechCards;
