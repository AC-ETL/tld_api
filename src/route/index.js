const express = require("express");
const userRoute = require("./userRoute");
const sessionRoutes = require("./sessionRoute");
const routers = express.Router();
const skillRoute = require("./skillRoute");
const userProfileRoute = require("./userProfileRoute");

const routes = [
  {
    path: "/user",
    route: userRoute,
  },
  {
    path: "/session",
    route: sessionRoutes,
  },
  {
    path: "/skill",
    route: skillRoute,
  },
  {
    path: "userProfile",
    route: userProfileRoute,
  },
  // {
  //   path: "follow",
  //   route: followRoute,
  // },
];

routes.forEach((route) => {
  routers.use(route.path, route.route);
});

module.exports = routers;
