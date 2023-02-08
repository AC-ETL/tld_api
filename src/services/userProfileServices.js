const userProfile = require("../model/userProfile");

const addUserBio = async (req) => {
  try {
    const addBio = await userProfile.create(req.body);
    return addBio;
  } catch (error) {
    console.log(error);
  }
};
const getUserData = async (req) => {
  try {
    const getData = await userProfile.findAll();
    return getData;
  } catch (error) {
    return error;
  }
};

const getSpecificData = async (req) => {
  try {
    const getSpecificData = await getSpecificData.findByPk(req.params.id);
    return getSpecificData;
  } catch (error) {
    return error;
  }
};

const updateUserData = async (req) => {
  try {
    const updateData = await userProfile.findByPk(req.params.id);
    if (!updateData) {
      return { message: "specfic skill is not extisting" };
    }

    updateData.About = req.params.About;
    updateData.Interest = req.params.Interest;
    updateData.gitHubLink = req.params.gitHubLink;
    updateData.discordLink = req.params.discordLink;
    updateData.twitterLink = req.params.twitterLink;
    updateData.linkdinkLink = req.params.linkdinkLink;
  } catch (error) {
    return error;
  }
};

const deleteUserData = async (req) => {
  try {
    const getData = await userProfile.findByPk(req.params.id);
    if (!getData) {
      return { message: "This skill is not existing" };
    }
    getData.destroy();
  } catch (error) {
    return error;
  }
};

module.exports = {
  addUserBio,
  getUserData,
  getSpecificData,
  updateUserData,
  deleteUserData,
};
