const projects = require("../models/projects");

const getProjectsController = async () => {
  const find = await projects.find();

  if (find) return find;
};

const getProjectController = async ({ id }) => {
  const find = await projects.findById(id);

  if (find) return find;
};

module.exports = {
  getProjectsController,
  getProjectController,
};
