const user = require("../model/user");

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

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
