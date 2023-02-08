const userProfileServices = require("../services/userProfileServices");

const addUserBio = async (req, res) => {
  const addBio = await userProfileServices.addBio(req);
  res.send(addBio);
};

const getUserData = async (req, res) => {
  const getData = await userProfileServices.getData(req);
  res.send(getData);
};
const getSpecificData = async (req, res) => {
  const getSpecificData = await userProfileServices.getSpecificData(req);
  res.send(getSpecificData);
};
const updateUserData = async (req, res) => {
  const updateData = await userProfileServices.updateData(req);
  res.send(updateData);
};
const deleteUserData = async (req, res) => {
  const deleted = await userProfileServices.updateData(req);
  res.send(deleted);
};



module.exports = {
  addUserBio,
  getUserData,
  getSpecificData,
  updateUserData,
  deleteUserData,
};
