const sequelize = require("./index");
const DataTypes = require("sequelize");
const user = require("./user");

const userSkill = sequelize.define(
  "usersSkills",
  {
    userSkillId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    skillId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
    },
    // uId: {
    //   type: DataTypes.STRING,
    //   foreignKey: true,
    // },
  },
  {
    timestamps: false,
  }
);

// userSkill.belongsTo(user, {
//   foreignKey: "uId",
//   targetKey: "uId",
// });

module.exports = userSkill;
