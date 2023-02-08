const sessionServices = require("../services/sessionServices");

const addSession = async (req, res) => {
  const result = await sessionServices.addSession(req);
  res.send(result);
};

const getAllSessions = async (req, res) => {
  const result = await sessionServices.getAllSessions(req);
  res.send(result);
};

const getOneSession = async (req, res) => {
  const result = await sessionServices.getOneSession(req);
  res.send(result);
};

const updateSession = async (req, res) => {
  const result = await sessionServices.updateSession(req);
  res.send(result);
};
const deleteSession = async (req, res) => {
  const result = await sessionServices.deleteSession(req);
  res.send(result);
};

const pastSession = async (req, res) => {
  const result = await sessionServices.pastSession(req);
  res.send(result);
};

const upCommingSession = async (req, res) => {
  const result = await sessionServices.upCommingSession(req);
  res.send(result);
};
// const addurl = async (req, res) => {
//   const result = await sessionServices.pastSessionLink(req);
//   res.send(result);
// };
module.exports = {
  addSession,
  getAllSessions,
  getOneSession,
  updateSession,
  deleteSession,
  pastSession,
  upCommingSession,
};
