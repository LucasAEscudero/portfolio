const technologies = require("../utils/technologies.json");

const getTechnologiesController = async () => {
  const find = await technologies;

  if (find) return find;
};

const getTechnologyController = async ({ id }) => {
  const find = await technologies.find((technology) => technology.id == id);

  if (find) return find;
};

module.exports = {
  getTechnologiesController,
  getTechnologyController,
};
