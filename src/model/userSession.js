const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const userSession = sequelize.define(
  "userSessions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    session_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    uId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = userSession;
