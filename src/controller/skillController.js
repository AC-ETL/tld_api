const skillServices = require("../services/skillServices");

const addSkill = async (req, res) => {
  const result = await skillServices.addSkills(req);
  res.send(result);
};

const getAllSkills = async (req, res) => {
  const result = await skillServices.getAllSkills(req);
  res.send(result);
};
const getOneSkill = async (req, res) => {
  const result = await skillServices.getOneSkill(req);
  res.send(result);
};
const updateSkills = async (req, res) => {
  const result = await skillServices.updateSkills(req);
  res.send(result);
};
const deleteSkill = async (req, res) => {
  const result = await skillServices.deleteSkill(req);
  res.send(result, { messag: "This User has been deleted" });
};

const trendingSkill = async (req, res) => {
  const result = await skillServices.getTrendingSkill(req);
  res.send(result);
};

module.exports = {
  addSkill,
  getAllSkills,
  getOneSkill,
  updateSkills,
  deleteSkill,
  trendingSkill,
};
