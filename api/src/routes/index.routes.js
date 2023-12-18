const { Router } = require("express");
const projectsRouter = require("./projects.routes");
const technologyRouter = require("./technology.routes");

const router = Router();

router.use("/projects", projectsRouter);

router.use("/technology", technologyRouter);

module.exports = router;
