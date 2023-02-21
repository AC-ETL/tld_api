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
    const condition = 1;
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
    const getOneUseData = await user.findByPk(req.params.uId);
    return getOneUseData;
  } catch (error) {
    return error;
  }
};

const updateUser = async (req) => {
  try {
    const updateUserData = await user.findByPk(req.params.uId);

    if (!updateUserData) {
      return { message: "User does not exist" };
    }

    console.log(updateUserData);

    const { firstName, lastName, email, image, isMentor } = req.body;

    await updateUserData.update({
      firstName: firstName,
      lastName: lastName,
      email: email,
      image: image,
      isMentor: isMentor,
    });

    return updatedUserData;
  } catch (error) {
    return error;
  }
};

const deleteUser = async (req) => {
  try {
    const userData = await user.findByPk(req.params.uId);
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
  const userData = await user.findByPk(req.body.uId);

  const sessionData = await Session.create({
    title: req.body.title,
    startTime: req.body.startTime,
    endTime: req.body.endTime,
    skills_id: req.body.skills_id,
    points: req.body.points,
    image: req.body.image,
    userUId: userData.uId,
  });
  return sessionData;
};

const getUserCreateSessions = async (req) => {
  console.log("Hello from");
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

const getOneUserSessions = async (req) => {
  const data = await user.findByPk(req.params.uId, {
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

  if (!data) {
    return { message: "User does not exist" };
  }

  console.log(data);
  return data;
};

const userSelectingSkills = async (req) => {
  console.log(req.body);
  // const uId = req.body.uId;
  // const fN = req.body.firstName;
  // const lN = req.body.lastName;
  // const email = req.body.email;
  // const img = req.body.imageUrl;

  const userData = await user.findByPk(req.body.uId);
  if (!userData) {
    return { Message: "Create the account" };
  }
  const skillData = await skills.findByPk(req.body.skillId);

  const resutlData = await usersSkills.create({
    uId: userData.uId,
    skillId: skillData.id,
  });
  return resutlData;
  // }
};

const usersSelectedSkills = async (req) => {
  const skillData = await user.findAll({
    include: [
      {
        model: skills,
        through: {
          attributes: [],
        },
      },
    ],
  });

  return skillData;
};

const userSelectedSkills = async (req) => {
  const uId = req.params.uId;
  const skillData = await user.findOne({
    where: { uId: uId },
    include: [
      {
        model: skills,
        through: {
          attributes: [],
        },
      },
    ],
  });

  return skillData;
};

const usersRelevantToSkills = async (req) => {
  const userData = await skills.findAll({
    include: [
      {
        model: user,
        through: {
          attributes: [],
        },
      },
    ],
  });

  return userData;
};

const usersRelevantToSkill = async (req) => {
  const id = req.params.id;
  const userData = await skills.findAll({
    where: { id: id },
    include: [
      {
        model: user,
        through: {
          attributes: [],
        },
      },
    ],
  });

  return userData;
};

const userInfo = async (req) => {
  const data = await user.findByPk(req.params.uId);
  if (!data) {
    return { message: "This user Is not Exist" };
  }
  // const data = await user.create({
  //   uId: req.body.uId,
  //   firstName: req.body.firstName,
  //   lastName: req.body.lastName,
  //   email: req.body.email,
  //   imageUrl: req.body.imageUrl,
  // });
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
  console.log(data);
  return data;
};
const follower = async (req) => {
  const followerData = user.findByPk(req.uId);

  const data = await follow.create({
    followerId: req.body.followerId,
    followingId: req.body.followingId,
  });
  return data;
};

const userFollowing = async (req) => {
  const uId = req.params.uId;
  console.log(uId);

  const data = await user.findAll({
    where: { uId: uId },
    include: [
      {
        model: follow,
        as: "follows",
        attributes: ["followingId"],

        include: [
          {
            model: user,
            as: "follower",
            attributes: ["firstName"],
          },
        ],
      },
    ],
    attributes: ["firstName"],
  });
  return data;
};
const followerOfUser = async (req) => {
  const uId = req.params.uId;
  const data = await user.findAll({
    where: { uId: uId },
    include: [
      {
        model: follow,
        as: "follows",
        attributes: ["followerId"],

        include: [
          {
            model: user,
            as: "follower",
            attributes: ["firstName"],
          },
        ],
      },
    ],
    attributes: ["firstName"],
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
  const id = req.params.id;
  const data = await Session.findOne({
    where: { id: id },
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
  const uId = req.params.uId;
  const data = await user.findOne({
    where: { uId: uId },
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
  getOneUserSessions,
  userSelectingSkills,
  usersSelectedSkills,
  userSelectedSkills,
  usersRelevantToSkill,
  usersRelevantToSkills,
  userInfo,
  getUserProfile,
  getOneProile,
  follower,
  userFollowing,
  followerOfUser,

  userSessions,
  getUsersOfSession,
  getSessionsOfUsers,
};
