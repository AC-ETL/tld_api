const sequelize = require("./index");
const { DataTypes } = require("sequelize");

const Session = sequelize.define(
  "sessions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    uId: {
      type: DataTypes.STRING,
      unique: true,
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
    tags: {
      type: DataTypes.STRING,
      allowNullable: false,
    },
    points: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Session;
