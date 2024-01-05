import { IoLogoGithub } from "react-icons/io";

import rickandmorty from "../../assets/projectsAssets/RickandMorty.jpeg";
import videogames from "../../assets/projectsAssets/Videogames.png";
import cer03 from "../../assets/projectsAssets/Cer03.jpeg";

const ProjectCard = ({ title, show, varName, github }) => {
  const projectImages = {
    rickandmorty,
    videogames,
    cer03,
  };

  return (
    <div
      className="card rounded-3 p-0 mb-2"
      style={{
        maxWidth: "20rem",
        backgroundColor: "#1a365d",
      }}
    >
      {/* image with deploy/youtube link */}
      <a href={show} target="_blank">
        <img
          src={projectImages[varName]}
          alt={`${title} Image`}
          className="rounded-top-3"
          style={{ minWidth: "100%", maxWidth: "300px" }}
        />
      </a>
      {/* bottom title */}
      <div className="card-body p-1" styles={{ backgroundColor: "#1a365d" }}>
        <div className="card-title">
          <h3 className="float-start text-white">{title}</h3>
          <a href={github} target="_blank" className="float-end pt-1">
            <IoLogoGithub size={30} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
