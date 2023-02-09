const express = require("express");
const userController = require("../controller/userController");

const userRoute = express.Router();

// Route for signUp
userRoute.route("/add").post(userController.createUser);

// Route for Creating userProfile crossponding to its UserId
userRoute.route("/userHasUserProfile").post(userController.userInfo);

// Route for getting Data about UserProfile crossponding to user
userRoute.route("/getUsersProfileData").get(userController.userProfileData);
// Route for getting Data about UserProfile crossponding to user
userRoute.route("/getUsersProfileData/:uId").get(userController.getOneProile);

// Route for 1 user can create Sessions
userRoute.route("/createSession").post(userController.userCreateSession);

// Route for getting data which user create which session
userRoute.route("/getUserSession").get(userController.getUserCreateSessions);

//Route for getting All users Information
userRoute.route("/").get(userController.getAllUser);

// Route for filter Users That are Menotors
userRoute.route("/mentors/:isMentors").get(userController.getMentors);

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
userRoute.route("/userSession").post(userController.userSessions);

// Route for getting Data of Users register same session
userRoute.route("/getUsersOfSession").get(userController.getUsersOfSession);

// Route for getting Data of session crossponding to 1 user
userRoute
  .route("/getSessionsOfUser/:uId")
  .get(userController.getSessionsOfUsers);

userRoute.route("/:id").get(userController.getOneUser);

userRoute.route("/:id").patch(userController.updateUser);
userRoute.route("/:id").delete(userController.deleteUser);

module.exports = userRoute;
