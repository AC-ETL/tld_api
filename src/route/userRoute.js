const express = require("express");
const userController = require("../controller/userController");

const userRoute = express.Router();

// Route for signUp
userRoute.route("/add").post(userController.createUser);

//Route for getting All users Information
userRoute.route("/").get(userController.getAllUser);

// Route for Updata specific user Data
userRoute.route("/:uId").put(userController.updateUser);

// Route for delete specific data
userRoute.route("/:uId").delete(userController.deleteUser);

// Route for Creating userProfile crossponding to its UserId
userRoute.route("/userHasUserProfile/:uId").post(userController.userInfo);

// Route for getting Data about UserProfile crossponding to user
userRoute.route("/getUsersProfileData").get(userController.userProfileData);
// Route for getting Data about UserProfile crossponding to user
userRoute.route("/getUsersProfileData/:uId").get(userController.getOneProile);

// Route for 1 user can create Sessions
userRoute.route("/createSession").post(userController.userCreateSession);

// Route for getting data which user create which session
userRoute.route("/getUserSession").get(userController.getUserCreateSessions);

// Route for getting data of specific user and its created session
userRoute.route("/getUserSession/:uId").get(userController.getOneUserSessions);

// Route for filter Users That are Menotors
userRoute.route("/mentors").get(userController.getMentors);

// Route for Selecting skills crossponding to  user
userRoute.route("/usersSkills").post(userController.userSelectingSkills);

// Route for getting skills agaist users
userRoute.route("/userSelectedSkill").get(userController.usersSelectedSkills);

// Route for getting skills crossponding to 1 user
userRoute
  .route("/userSelectedSkill/:uId")
  .get(userController.userSelectedSkills);

//  Route for getting users against  skills
userRoute
  .route("/userRelevantToSkill")
  .get(userController.usersRelevantToSkills);

//  Route for getting users against 1 skill
userRoute
  .route("/userRelevantToSkill/:id")
  .get(userController.usersRelevantToSkill);

// Route for creating followers and following of user
userRoute.route("/userAudience").post(userController.follower);

userRoute.route("/userAudience/:uId").get(userController.userFollowing);

userRoute
  .route("/userAudience/follower/:uId")
  .get(userController.followerOfUser);

// Route for registerd user crossponding to session and session have multipult users that registered 1 user
userRoute.route("/userRegisterSession").post(userController.userSessions);

// Route for getting Data of Users register same session
userRoute.route("/getUsersOfSession/:id").get(userController.getUsersOfSession);

// Route for getting Data of session crossponding to 1 user
userRoute
  .route("/getSessionsOfUser/:uId")
  .get(userController.getSessionsOfUsers);

// Route for Getting specific user Data
userRoute.route("/:uId").get(userController.getOneUser);

module.exports = userRoute;
