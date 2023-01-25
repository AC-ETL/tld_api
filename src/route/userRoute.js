const express = require("express");
const userController = require("../controller/userController");

const userRoute = express.Router();

userRoute.route("/").get(userController.getAllUser);
userRoute.route("/:id").get(userController.getOneUser);
userRoute.route("/add").post(userController.createUser);
userRoute.route("/:id").patch(userController.updateUser);
userRoute.route("/:id").delete(userController.deleteUser);

module.exports = userRoute;
