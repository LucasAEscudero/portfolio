const { Router } = require("express");
const technoRouter = Router();

const { getHandlerTechnologies } = require("../handlers/technologies.handler");

technoRouter.get("/", getHandlerTechnologies);

module.exports = technoRouter;
