const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "TECHNOLOGY",
    {
      id_technology: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      name_technology: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experience: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: true,
      paranoid: true,
      deleteAt: "detroyTime",
    }
  );
};
