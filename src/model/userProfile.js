const sequelize = require("./index");
const { DataTypes } = require("sequelize");

const userProfile = sequelize.define(
  "userProiles",
  {
    About: {
      type: DataTypes.STRING,
    },
    Interest: {
      type: DataTypes.STRING,
    },
    gitHubLink: {
      type: DataTypes.STRING,
    },
    discordLink: {
      type: DataTypes.STRING,
    },
    twitterLink: {
      type: DataTypes.STRING,
    },
    linkdinLink: {
      type: DataTypes.STRING,
    },
    uId: {
      type: DataTypes.STRING,
      foreignKey: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = userProfile;
