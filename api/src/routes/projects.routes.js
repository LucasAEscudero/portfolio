const { Router } = require("express");
const {
  getProjectsHandler,
  getProjectHandler,
} = require("../handlers/projects.handler");

const projectsRouter = Router();

projectsRouter.get("/", getProjectsHandler); //start
projectsRouter.get("/:id", getProjectHandler);

module.exports = projectsRouter;
