const technologies = require("../models/technologies");

const getControllerTechnologies = async () => {
  const technologiesFind = await technologies.find(
    {},
    {
      __v: 0,
    }
  );

  return technologiesFind;
};

module.exports = {
  getControllerTechnologies,
};
