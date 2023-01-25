const session = require("../model/session");

const addSession = async (req) => {
  try {
    const addSessionData = await session.create(req.body);
    return addSessionData;
  } catch (error) {
    return error;
  }
};

const getAllSessions = async (req) => {
  try {
    const getAllSessionsData = await session.findAll();
    return getAllSessionsData;
  } catch (error) {
    return error;
  }
};

const getOneSession = async (req) => {
  try {
    const getOneSessionData = await session.findByPk(req.params.id);
    return getOneSessionData;
  } catch (error) {
    return error;
  }
};

const updateSession = async (req) => {
  try {
    const getSession = await session.findByPk(req.params.id);
    if (!getSession) {
      return { message: "This Session is not existing" };
    }

    getSession.title = req.params.title;
    getSession.startTime = req.params.startTime;
    getSession.endTime = req.params.endTime;
    getSession.tags = req.params.tags;
    getSession.points = req.params.points;
    getSession.image = req.params.image;
  } catch (error) {
    error;
  }
};

const deleteSession = async (req) => {
  try {
    const getSession = await session.findByPk(req.params.id);
    if (!getSession) {
      return { message: "This Session deos not exist " };
    }
    getSession.destroy();
  } catch (error) {
    return error;
  }
};

module.exports = {
  addSession,
  getAllSessions,
  getOneSession,
  updateSession,
  deleteSession,
};
