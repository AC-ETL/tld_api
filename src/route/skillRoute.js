const express = require("express");
const skillRoutes = express.Router();
const skillController = require("../controller/skillController");

skillRoutes.route("/add").post(skillController.addSkill);
skillRoutes.route("/").get(skillController.getAllSkills);
skillRoutes.route("/:id").get(skillController.getOneSkill);

// Route For getting skills that are in trending
skillRoutes.route("/trending/:isTrending").get(skillController.trendingSkill);
skillRoutes.route("/:id").patch(skillController.updateSkills);
skillRoutes.route("/id").delete(skillController.deleteSkill);

module.exports = skillRoutes;
