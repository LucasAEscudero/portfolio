const technologies = require("../models/technologies");

const getControllerTechnologies = async () => {
  const technologiesFind = await technologies
    .find(
      {},
      {
        __v: 0,
      }
    )
    .sort({ order: 1 });

  return technologiesFind;
};

module.exports = {
  getControllerTechnologies,
};
