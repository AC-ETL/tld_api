const usersServices = require("../services/userServices");

// SignUp middleware for creating user
const createUser = async (req, res) => {
  const result = await usersServices.createUser(req);
  res.send(result);
};

const getAllUser = async (req, res) => {
  const result = await usersServices.getAllUsers(req);
  res.send(result);
};

const getOneUser = async (req, res) => {
  const result = await usersServices.getOneUser(req);
  res.send(result);
};

const updateUser = (req, res) => {
  console.log(req.body);
  const result = usersServices.updateUser(req);
  return result;
};

const deleteUser = async (req, res) => {
  const result = await usersServices.deleteUser(req);
  res.send({ message: "User has been deleted" });
};

const getMentors = async (req, res) => {
  console.log(req.params.isMentors);
  const getMentor = await usersServices.getMentors(req);
  res.send(getMentor);
};

const userCreateSession = async (req, res) => {
  console.log(req.body);
  const result = await usersServices.userCreateSession(req);
  console.log(result);
  res.send(result);
};

const getUserCreateSessions = async (req, res) => {
  const result = await usersServices.getUserCreateSessions(req);
  res.send(result);
};

const getOneUserSessions = async (req, res) => {
  const result = await usersServices.getOneUserSessions(req);
  res.send(result);
};
const userSelectingSkills = async (req, res) => {
  const result = await usersServices.userSelectingSkills(req);
  res.send(result);
};
const usersSelectedSkills = async (req, res) => {
  const result = await usersServices.usersSelectedSkills(req);
  res.send(result);
};
const userSelectedSkills = async (req, res) => {
  const result = await usersServices.userSelectedSkills(req);
  res.send(result);
};

const usersRelevantToSkills = async (req, res) => {
  const result = await usersServices.usersRelevantToSkills(req);
  res.send(result);
};
const usersRelevantToSkill = async (req, res) => {
  const result = await usersServices.usersRelevantToSkill(req);
  res.send(result);
};

const userInfo = async (req, res) => {
  const result = await usersServices.userInfo(req);

  console.log(req.body);
  res.send(result);
};

const userProfileData = async (req, res) => {
  const result = await usersServices.getUserProfile(req);
  res.send(result);
};

const getOneProile = async (req, res) => {
  const result = await usersServices.getOneProile(req);
  res.send(result);
};

const follower = async (req, res) => {
  const result = await usersServices.follower(req);
  res.send(result);
};

const userFollowing = async (req, res) => {
  const result = await usersServices.userFollowing(req);
  res.send(result);
};

const followerOfUser = async (req, res) => {
  const result = await usersServices.followerOfUser(req);
  res.send(result);
};

const userSessions = async (req, res) => {
  const result = await usersServices.userSessions(req);
  res.send(result);
};

const getUsersOfSession = async (req, res) => {
  const result = await usersServices.getUsersOfSession(req);
  res.send(result);
};
const getSessionsOfUsers = async (req, res) => {
  const result = await usersServices.getSessionsOfUsers(req);
  res.send(result);
};

module.exports = {
  createUser,
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
  getMentors,
  userCreateSession,
  getUserCreateSessions,
  getOneUserSessions,
  userSelectingSkills,
  usersSelectedSkills,
  userSelectedSkills,
  usersRelevantToSkill,
  usersRelevantToSkills,
  userInfo,
  userProfileData,
  getOneProile,
  follower,
  userFollowing,
  followerOfUser,
  userSessions,
  getUsersOfSession,
  getSessionsOfUsers,
};
