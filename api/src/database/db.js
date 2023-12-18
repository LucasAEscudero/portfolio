const mongoose = require("mongoose");
const { MONGODB_URI } = process.env;

mongoose
  .connect(MONGODB_URI)
  .then(() => console.log("Database connected successfully"))
  .catch((err) => console.log(err));
