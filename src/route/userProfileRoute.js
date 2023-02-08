const express = require("express");
const userProfileRoute = express.Router();
const userProfileController = require("../controller/userProfileController");

userProfileRoute.route("/").get(userProfileController.getUserData);
userProfileRoute.route("/:id").get(userProfileController.getSpecificData);
userProfileRoute.route("/Add").post(userProfileController.addUserBio);
userProfileRoute.route("/:id").patch(userProfileController.updateUserData);
userProfileRoute.route("/:id").delete(userProfileController.deleteUserData);

module.exports = userProfileRoute;
