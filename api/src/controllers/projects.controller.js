const projects = require("../models/projects");

const getControllerProjects = async () => {
  const projectsFind = await projects.find(
    {},
    {
      __v: 0,
    }
  );

  return projectsFind;
};

module.exports = {
  getControllerProjects,
};
