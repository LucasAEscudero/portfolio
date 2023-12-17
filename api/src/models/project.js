const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "PROJECT",
    {
      id_project: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title_project: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      resume_project: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description_project: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      collaborators_project: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      finished_project: {
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
