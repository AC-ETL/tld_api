const sequelize = require("./index");
const { DataTypes } = require("sequelize");
const skill = require("./skills");

const Session = sequelize.define(
  "sessions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNullable: false,
    },
    startTime: {
      type: DataTypes.DATE,
      allowNullable: false,
    },
    endTime: {
      type: DataTypes.DATE,
      allowNullable: false,
    },
    skills_id: {
      type: DataTypes.INTEGER,
      foriegnKey: true,
      allowNullable: false,
    },
    points: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
    videoUrl: {
      type: DataTypes.STRING,
      defaultValue: false,
    },

    userUId: {
      type: DataTypes.STRING,
      foriegnKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Session;
