const express = require("express");
const userRoute = require("./userRoute");
const sessionRoutes = require("./sessionRoute");
const routers = express.Router();

const routes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/session",
    route: sessionRoutes,
  },
];

routes.forEach((route) => {
  routers.use(route.path, route.route);
});

module.exports = routers;
