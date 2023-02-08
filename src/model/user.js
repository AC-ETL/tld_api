const sequelize = require("./index");
const { DataTypes } = require("sequelize");
const session = require("./session");
const skills = require("./skills");
const usersSkills = require("../model/usersSkills");
const userProfile = require("./userProfile");
const follows = require("./follow");
const userSession = require("./userSession");

const user = sequelize.define(
  "user",
  {
    uId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
    },
    lastName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },

    imageUrl: {
      type: DataTypes.STRING,
    },
    isMentor: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: "user",
    timestamps: false,
  }
);

user.hasMany(session, {
  foreignKey: "userUId",
});
// session.belongsTo(user);

user.belongsToMany(session, {
  through: userSession,
  foreignKey: "uId",
  otherKey: "session_id",
});

session.belongsToMany(user, {
  through: userSession,
  foreignKey: "session_id",
  otherKey: "uId",
});

user.hasMany(userSession, {
  foreignKey: "uId",
  sourceKey: "uId",
});
userSession.belongsTo(user, {
  foreignKey: "uId",
  sourceKey: "uId",
});
session.hasMany(userSession, {
  foreignKey: "session_id",
  sourceKey: "id",
});
userSession.belongsTo(session, {
  foreignKey: "session_id",
  sourceKey: "id",
});

user.belongsToMany(skills, {
  through: usersSkills,
  foreignKey: "uId",
  otherKey: "skillId",
});
skills.belongsToMany(user, {
  through: usersSkills,
  foreingKey: "skillId ",
  otherKey: "uId",
});
user.hasMany(usersSkills, {
  foreignKey: "uId",
  sourceKey: "uId",
});
usersSkills.belongsTo(user, {
  foreignKey: "uId",
  sourceKey: "uId",
});
skills.hasMany(usersSkills, {
  foreignKey: "skillId",
  sourceKey: "id",
});
usersSkills.belongsTo(skills, {
  foreignKey: "skillId",
  sourceKey: "id",
});
user.hasOne(userProfile, { foreignKey: "uId", sourceKey: "uId" });
userProfile.belongsTo(user, { foreignKey: "uId", sourceKey: "uId" });

user.belongsToMany(user, {
  as: "Followers",
  through: follows,
  foreignKey: "followingId",
  otherKey: "followerId",
});

user.belongsToMany(user, {
  as: "Followings",
  through: follows,
  foreignKey: "followerId",
  otherKey: "followingId",
});

module.exports = user;
