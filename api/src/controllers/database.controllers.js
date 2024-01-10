// data
const projectsData = require("../utils/projects.json");
const technologiesData = require("../utils/technologies.json");
const trainingData = require("../utils/training.json");

// models
const projects = require("../models/projects");
const technologies = require("../models/technologies");
const training = require("../models/training");

const postControllerDatabase = async () => {
  await technologies.create(technologiesData);
  await projects.create(projectsData);
  await training.create(trainingData);
};

const deleteControllerDatabase = async () => {
  await technologies.collection.drop();
  await projects.collection.drop();
  await training.collection.drop();
};

module.exports = {
  postControllerDatabase,
  deleteControllerDatabase,
};
