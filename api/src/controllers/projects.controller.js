const projects = require("../utils/projects.json");

const getProjectsController = async () => {
  const find = await projects;

  if (find) return find;
};

const getProjectController = async ({ id }) => {
  const find = await projects.find((project) => project.id == id);

  if (find) return find;
};

module.exports = {
  getProjectsController,
  getProjectController,
};
