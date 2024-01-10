const training = require("../models/training");

const getControllerTraining = async () => {
  const trainingFind = await training.find(
    {},
    {
      __v: 0,
    }
  );

  return trainingFind;
};

module.exports = {
  getControllerTraining,
};
