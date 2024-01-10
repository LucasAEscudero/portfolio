const { Router } = require("express");
const projectsRouter = Router();

const { getHandlerProjects } = require("../handlers/projects.handler");

projectsRouter.get("/", getHandlerProjects);

module.exports = projectsRouter;
