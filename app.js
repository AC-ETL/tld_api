const express = require("express");
const config = require("./src/config/config");
const routers = require("./src/route/index");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);

app.listen(config.app.port);
