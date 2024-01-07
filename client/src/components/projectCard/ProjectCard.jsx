import ProjectTechCard from "../projectTechCard/ProjectTechCard";

import { IoLogoGithub } from "react-icons/io";
import { MdWeb } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";

// projects
import rickandmorty from "../../assets/projectsAssets/RickandMorty.jpeg";
import videogames from "../../assets/projectsAssets/Videogames.png";
import cer03 from "../../assets/projectsAssets/Cer03.jpeg";

// techs
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

const ProjectCard = ({
  title,
  varName,
  description,
  technologies,
  youtube,
  deploy,
  github,
  date,
  collaborators,
}) => {
  const projectImages = {
    rickandmorty,
    videogames,
    cer03,
  };

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
    <div class="row card mb-3 rounded-3">
      <h3 class="card-header text-start">{title}</h3>
      <div className="container">
        {/* body */}
        <div class="card-body row">
          <img
            src={projectImages[varName]}
            alt={title}
            className="col-md-12 col-xl-5"
            style={{ maxWidth: "400px", maxHeight: "300px" }}
          />
          <p class="card-text col-md-12 col-xl-7">{description}</p>
        </div>
        <div className="border my-2"></div>
        {/* technologies */}
        <div>
          <h5>Tecnologias utilizadas: </h5>
          <div className="d-flex flex-wrap justify-content-center mb-1">
            {technologies?.map((technology, i) => (
              <ProjectTechCard
                key={i}
                name={technology}
                icon={icons[technology.toLowerCase()]}
              />
            ))}
          </div>
        </div>
        {/* date and links */}
        <div className="container card-footer text-muted">
          <div className="row">
            <h5 className="col-md-12 col-xl-4 text-xl-start text-md-center">
              {date}
            </h5>
            <div className="col-md-0 col-xl-5"></div>
            <div className="col-md-12 col-xl-3">
              <a href={github} class="card-link" target="_blank">
                <button className="rounded-pill p-2">
                  <IoLogoGithub size={30} /> GitHub
                </button>
              </a>
              {deploy && (
                <a href={deploy} class="card-link" target="_blank">
                  <button className="rounded-pill p-2">
                    <MdWeb size={30} /> Deploy
                  </button>
                </a>
              )}
              {youtube && (
                <a href={youtube} class="card-link" target="_blank">
                  <button className="rounded-pill p-2">
                    <FaYoutube size={30} /> Youtube
                  </button>
                </a>
              )}
            </div>
          </div>
        </div>
        {/* <div class="card-footer text-muted">2 days ago</div> */}
      </div>
    </div>
  );
};

export default ProjectCard;
