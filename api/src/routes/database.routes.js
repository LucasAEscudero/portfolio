const { Router } = require("express");
const dbRouter = Router();

const {
  postHandlerDatabase,
  deleteHandlerDatabase,
} = require("../handlers/database.handler");

dbRouter.post("/", postHandlerDatabase);
dbRouter.delete("/", deleteHandlerDatabase);

module.exports = dbRouter;
