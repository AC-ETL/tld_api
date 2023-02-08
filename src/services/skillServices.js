const skill = require("../model/skills");

const addSkills = async (req) => {
  try {
    const addSkill = await skill.create(req.body);
    return addSkill;
  } catch (error) {
    return error;
  }
};

const getAllSkills = async (req) => {
  try {
    const getSkills = await skill.findAll();
    return getSkills;
  } catch (error) {
    return error;
  }
};

const getOneSkill = async (req) => {
  try {
    const getOneSkill = await skill.findByPk(req.params.id);
    return getOneSkill;
  } catch (error) {
    return error;
  }
};
const getTrendingSkill = async (req) => {
  try {
    const condition = req.params.isTrending;
    console.log(condition);
    const getTrendingSkill = await skill.findAll({
      where: {
        trending: condition,
      },
    });
    return getTrendingSkill;
  } catch (error) {
    return error;
  }
};

const updateSkills = async (req) => {
  try {
    const updateSkills = await skill.findByPk(req.params.id);
    if (!updateSkills) {
      return { message: "specfic skill is not extisting" };
    }

    updateSkills.name = req.params.name;
    updateSkills.image = req.params.image;
    updateSkills.trending = req.params.trending;
  } catch (error) {
    return error;
  }
};

const deleteSkill = async (req) => {
  try {
    const getSkill = await skill.findByPk(req.params.id);
    if (!getSkill) {
      return { message: "This skill is not existing" };
    }
    getSkill.destroy();
  } catch (error) {
    return error;
  }
};

module.exports = {
  addSkills,
  getAllSkills,
  getOneSkill,
  updateSkills,
  deleteSkill,
  getTrendingSkill,
};
