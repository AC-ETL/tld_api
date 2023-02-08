const Sequelize = require("sequelize");
const config = require("../config/config");

const sequelize = new Sequelize(
  `${config.db.database}`,
  `${config.db.user}`,
  config.db.password,
  {
    host: `${config.db.host}`,
    dialect: `${config.db.dialect}`,
    define: {
      timestamps: false,
    },
  }
);

try {
  sequelize.authenticate();
  console.log("Connnection has been establish");
} catch (error) {
  console.log("Unable to connect to the database", error);
}

sequelize.sync();

module.exports = sequelize;
