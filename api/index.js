require("dotenv").config();
const server = require("./src/app");
const { database } = require("./src/database/db");
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  database.sync({ alter: true });
  console.log(`Server listening on port ${PORT}`);
});
