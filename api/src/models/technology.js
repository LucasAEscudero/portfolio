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
      resume_technology: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      experience_technology: {
        type: DataTypes.STRING,
        defaultValue: null,
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
