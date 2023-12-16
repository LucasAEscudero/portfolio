const fs = require("fs");
const path = require("path");
const Technology = require("../models/Technology");

const handlerSequelizeModels = ({ sequelize }) => {
  const basename = path.basename(__filename);

  const modelDefiners = [];

  fs.readdirSync(path.join(__dirname, "../models"))
    .filter(
      (file) =>
        file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    )
    .forEach((file) => {
      modelDefiners.push(require(path.join(__dirname, "../models", file)));
    });

  modelDefiners.forEach((model) => model(sequelize));

  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
  ]);
  sequelize.models = Object.fromEntries(capsEntries);
};

const handlerAsocciationsModels = ({ sequelize }) => {
  const { PROJECT, TECHNOLOGY } = sequelize.models;

  PROJECT.belongsToMany(TECHNOLOGY, {
    through: "PROJECT_TECHNOLOGIES",
  });

  TECHNOLOGY.belongsToMany(PROJECT, {
    through: "PROJECT_TECHNOLOGIES",
  });
};

module.exports = {
  handlerSequelizeModels,
  handlerAsocciationsModels,
};
