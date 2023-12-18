const { Router } = require("express");
// const {
//   postTechnologyHandler,
//   getTechnologyHandler,
//   getTechnologiesHandler,
//   putTechnologyHandler,
//   deleteTechnologyHandler,
// } = require("../handlers/technologyHandler");

const technologyRouter = Router();

technologyRouter.get("/");
technologyRouter.get("/:id");

technologyRouter.post("/");

technologyRouter.put("/");

technologyRouter.delete("/:id");

module.exports = technologyRouter;
