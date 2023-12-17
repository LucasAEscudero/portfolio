const { Router } = require("express");
const projectsRouter = require("./projectsRouter");
const technologyRouter = require("./technologyRouter");

const router = Router();

// router.get("/", (req, res) => res.send("Yahallo"));

router.use("/projects", projectsRouter);

router.use("/technology", technologyRouter);

module.exports = router;
