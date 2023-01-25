const sequelize = require("./index");
const { DataTypes } = require("sequelize");

const user = sequelize.define(
  "users",
  {
    uId: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
  },
  {
    tableName: "users",
    timestamps: false,
  }
);

module.exports = user;
