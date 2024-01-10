const { Router } = require("express");
const trainingRouter = Router();

const { getHandlerTraining } = require("../handlers/training.handler");

trainingRouter.get("/", getHandlerTraining);

module.exports = trainingRouter;
