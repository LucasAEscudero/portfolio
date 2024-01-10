const { Router } = require("express");
const router = Router();

const technoRouter = require("./technologies.routes");
const projectsRouter = require("./projects.routes");
const trainingRouter = require("./training.routes");

router.use("/technologies", technoRouter);
router.use("/projects", projectsRouter);
router.use("/training", trainingRouter);

// const dbRouter = require("./database.routes");
// router.use("/database", dbRouter);

module.exports = router;
