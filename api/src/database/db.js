const { Sequelize } = require("sequelize");
const {
  handlerSequelizeModels,
  handlerAsocciationsModels,
} = require("./associations");
const { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST } = process.env;

let sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "postgres",
  logging: false,
  native: false,
});

handlerSequelizeModels({ sequelize });
handlerAsocciationsModels({ sequelize });

module.exports = {
  ...sequelize.models,
  database: sequelize,
};
