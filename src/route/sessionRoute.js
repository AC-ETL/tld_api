const express = require("express");
const sessionRoutes = express.Router();
const sessionController = require("../controller/sessionController");

sessionRoutes.route("/add").post(sessionController.addSession);
sessionRoutes.route("/").get(sessionController.getAllSessions);

//  Route for filter all Past Session from All session
sessionRoutes.route("/pastSession").get(sessionController.pastSession);

// Route for filter all upComming Session from All session
sessionRoutes.route("/upComming").get(sessionController.upCommingSession);
sessionRoutes.route("/:id").get(sessionController.getOneSession);
sessionRoutes.route("/:id").patch(sessionController.updateSession);
sessionRoutes.route("/:id").delete(sessionController.deleteSession);

module.exports = sessionRoutes;
