const sequelize = require("./index");
const DataTypes = require("sequelize");
const user = require("./user");

const follow = sequelize.define(
  "follows",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    followerId: {
      type: DataTypes.STRING,
      foreignKey: true,
      // allowNull: false,
      // users.belongsToMany(follows,{through:follow})
      // references: {
      //   model: "users",
      //   key: "id",
      // },
    },
    followingId: {
      type: DataTypes.STRING,
      foreignKey: true,
      // allowNull: false,
      // references: {
      //   model: "users",
      //   key: "id",
      // },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = follow;
