const { Router } = require("express");
const { getProjectsHandler } = require("../handlers/projectsHandler");

const projectsRouter = Router();

projectsRouter.get("/", getProjectsHandler); //start
projectsRouter.get("/:project");

projectsRouter.post("/");
projectsRouter.put("/");

projectsRouter.delete("/");

module.exports = projectsRouter;
