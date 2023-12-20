const { Router } = require("express");
const {
  getTechnologiesHandler,
  getTechnologyHandler,
} = require("../handlers/technologies.handler");

const technologyRouter = Router();

technologyRouter.get("/", getTechnologiesHandler);
technologyRouter.get("/:id", getTechnologyHandler);

// technologyRouter.post("/");

// technologyRouter.put("/");

// technologyRouter.delete("/:id");

module.exports = technologyRouter;
