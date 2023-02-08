const { Sequelize } = require("sequelize");
const registerSession = require("../model/registerSession");

const registeredSession = async (req) => {
  try {
    const registeredSession = await registerSession.create(req.body);
    return registerSession;
  } catch (error) {
    return error;
  }
};

const getSessionDetail = async (req) => {
  const userId = req.params.user_id;
  const sessionId = req.params.session_id;
  try {
    const getSessionDetail = await registerSession.findAll({
      where: {
        [Sequelize.Op.or]: [{ user_id: userId }, { session_id: sessionId }],
      },
    });
  } catch (error) {
    return error;
  }
};

const updateSession = async (req) => {
  try {
    const getData = await registerSession.findByPk(req.params.id);
    if (!getData) {
      return { message: "This is not existing" };
    }
    getData.user_id = req.params.user_id;
    getData.session_id = req.params.session_id;
  } catch (error) {
    return error;
  }
};

const deleteSession = async (req) => {
  try {
    const getData = await registerSession.findByPk(req.params.id);
    if (!getData) {
      return { message: "This is not existing" };
    }
    getData.destroy();
  } catch (error) {
    return error;
  }
};

module.exports = {
  registeredSession,
  getSessionDetail,
  updateSession,
  deleteSession,
};
