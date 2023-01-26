const usersServices = require("../services/userServices");

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
  const result = usersServices.updateUser(req);
  return result;
};

const deleteUser = async (req, res) => {
  const result = await usersServices.deleteUser(req);
  res.send({ message: "User has been deleted" });
};

module.exports = {
  createUser,
  getAllUser,
  getOneUser,
  updateUser,
  deleteUser,
};
