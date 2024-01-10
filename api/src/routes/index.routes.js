const { Router } = require("express");
const router = Router();

const technoRouter = require("./technologies.routes");
const dbRouter = require("./database.routes");

router.use("/technologies", technoRouter);
router.use("/database", dbRouter);

module.exports = router;
