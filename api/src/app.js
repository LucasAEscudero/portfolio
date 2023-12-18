const express = require("express");
// const bodyParser = require("body-parser");
const morgan = require("morgan");
const router = require("./routes/index.routes");
const cors = require("cors");
// const corsOptions = require("./utils/cors");

const server = express();

// server.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
// server.use(bodyParser.json({ limit: "50mb" }));
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/", router);

// Error catching endware.
server.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
