require("dotenv").config();

const config = {
  app: {
    port: process.env.PORT,
  },
  db: {
    host: process.env.Host,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    dialect: process.env.DIALECT,
  },
};

module.exports = config;
