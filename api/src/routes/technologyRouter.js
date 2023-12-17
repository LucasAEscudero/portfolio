const { Router } = require("express");
const {
  postTechnologyHandler,
  getTechnologyHandler,
  getTechnologiesHandler,
  putTechnologyHandler,
  deleteTechnologyHandler,
} = require("../handlers/technologyHandler");

const technologyRouter = Router();

technologyRouter.get("/", getTechnologiesHandler);
technologyRouter.get("/:id", getTechnologyHandler);

technologyRouter.post("/", postTechnologyHandler);

technologyRouter.put("/", putTechnologyHandler);

technologyRouter.delete("/:id", deleteTechnologyHandler);

module.exports = technologyRouter;
