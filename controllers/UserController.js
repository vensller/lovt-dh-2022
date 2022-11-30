const database = require("../database/models");

function getUsers(req, res) {
  database.User.findAll().then((data) => {
    res.json(data);
  });
}

function getUserById(req, res) {
  const { id } = req.params;
  database.User.findByPk(id).then((data) => {
    res.json(data);
  });
}

module.exports = {
  getUsers,
  getUserById,
};
