const Session = require("../model/session");
const user = require("../model/user");
const skills = require("../model/skills");
const usersSkills = require("../model/usersSkills");
const userProfile = require("../model/userProfile");
const follow = require("../model/follow");
const userSession = require("../model/userSession");

const createUser = async (req) => {
  try {
    const userData = await user.create(req.body);
    return userData;
  } catch (error) {
    return error;
  }
};

const getAllUsers = async (req) => {
  try {
    const getUserData = await user.findAll();
    return getUserData;
  } catch (error) {
    return error;
  }
};

const getMentors = async (req) => {
  try {
    console.log(req.params.isMentors);
    const condition = req.params.isMentors;
    const getMentor = await user.findAll({
      where: {
        isMentor: condition,
      },
    });
    return getMentor;
  } catch (error) {
    return error;
  }
};

const getOneUser = async (req) => {
  try {
    const getOneUseData = await user.findByPk(req.params.id);
    return getOneUseData;
  } catch (error) {
    return error;
  }
};

const updateUser = async (req) => {
  try {
    const updateUserData = await user.findByPk(req.params.id);
    if (!updateUserData) {
      return { message: "User does not exist" };
    }
    updateUserData.uId = req.params.id;
    updateUserData.name = req.params.name;
    updateUserData.email = req.params.email;
    updateUserData.image = req.params.image;
    updateUserData.isMentor = req.params.isMentor;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (req) => {
  try {
    const userData = await user.findByPk(req.params.id);
    console.log(userData);
    if (!userData) {
      return { message: "User does not exist" };
    }

    const deleteUser = userData.destroy();
    return deleteUser.end();
  } catch (error) {
    return error;
  }
};

const userCreateSession = async (req) => {
  // const uId = req.body.uId;
  // const fN = req.body.firstName;
  // const lN = req.body.lastName;
  // const email = req.body.email;
  // const img = req.body.imageUrl;
  // const data = await user.create({
  //   uId: uId,
  //   firstName: fN,
  //   lastName: lN,
  //   email: email,
  //   imageUrl: img,
  // });

  // if (data && data.uId) {}
  const sessionData = await Session.create({
    title: req.body.title,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    skills_id: req.body.skills_id,
    points: req.body.points,
    image: req.body.image,
    userUId: req.body.uId,
  });
  return sessionData;
};

const getUserCreateSessions = async (req) => {
  const data = await user.findAll({
    attributes: ["uId", "firstName", "lastName", "email"],

    include: [
      {
        model: Session,
        attributes: ["title", "startTime", "endTime", "skills_id", "image"],

        through: {
          attributes: [],
        },
      },
    ],
  });
  console.log(data);
  return data;
};

const userSelectingSkills = async (req) => {
  const uId = req.body.uId;
  const fN = req.body.firstName;
  const lN = req.body.lastName;
  const email = req.body.email;
  const img = req.body.imageUrl;

  const resutlData = await usersSkills.create({
    id: req.body.id,
    uId: req.body.uId,
    skillId: req.body.skillId,
  });
  return resutlData;
  // }
};

const userSelectedSkills = async (req) => {
  const skillData = await user.findOne({
    where: { uId: "sdt" },
    include: skills,
  });

  return skillData;
};

const usersRelevantToSkill = async (req) => {
  const userData = await skills.findOne({
    where: { id: 2 },
    include: user,
  });

  return userData;
};

const userInfo = async (req) => {
  const data = await user.create({
    uId: req.body.uId,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    imageUrl: req.body.imageUrl,
  });
  if (data && data.uId) {
    const userData = await userProfile.create({
      About: req.body.About,
      Interest: req.body.Interest,
      gitHubLink: req.body.gitHubLink,
      discordLink: req.body.discordLink,
      twitterLink: req.body.twitterLink,
      linkdinLink: req.body.linkdinLink,
      uId: data.uId,
    });
    return userData;
  }
};

const getUserProfile = async (req) => {
  const data = await user.findAll({
    include: userProfile,
  });
  return data;
};
const follower = async (req) => {
  const data = await follow.create({
    followerId: req.body.followerId,
    followingId: req.body.followingId,
  });
  return data;
};

const getOneProile = async (req) => {
  const uId = req.params.uId;
  const data = await user.findOne({
    where: { uId: uId },
    include: userProfile,
  });
  return data;
};

const userSessions = async (req) => {
  const data = await userSession.create(req.body);
  return data;
};

const getUsersOfSession = async (req) => {
  const data = await Session.findOne({
    where: { id: 2 },
    include: [
      {
        model: user,
        required: false,
        through: {
          attributes: [],
        },
      },
    ],
  });
  return data;
};

const getSessionsOfUsers = async (req) => {
  const data = await user.findOne({
    where: { uId: "sdkds" },
    include: [
      {
        model: Session,
        through: {
          attributes: [],
        },
      },
    ],
  });
  return data;
};

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
  getMentors,
  userCreateSession,
  getUserCreateSessions,
  userSelectingSkills,
  userSelectedSkills,
  usersRelevantToSkill,
  userInfo,
  getUserProfile,
  getOneProile,
  follower,
  userSessions,
  getUsersOfSession,
  getSessionsOfUsers,
};
