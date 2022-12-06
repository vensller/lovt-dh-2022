const database = require("../database/models");

function getUsers(req, res) {
  database.User.findAll({
    include: [
      {
        model: database.LoginHistory,
        as: "login_history",
      },
    ],
  }).then((data) => {
    res.json(data);
  });
}

function getUserById(req, res) {
  const { id } = req.params;
  database.User.findByPk(id).then((data) => {
    res.json(data);
  });
}

function createUser(req, res) {
  // Criar ou alterar - Validações são obrigatórias
  const { name, lastName, email, password } = req.body;
  database.User.create({
    uname: name,
    upassword: password,
    lastName,
    email,
  }).then((data) => {
    return res.json(data);
  });
}

function updateUser(req, res) {
  const { id } = req.params;
  const { name, lastName, email, password } = req.body;
  database.User.update(
    {
      uname: name,
      upassword: password,
      email,
      lastName,
    },
    {
      where: {
        id,
      },
    }
  ).then((data) => {
    res.json(data);
  });
}

function deleteUser(req, res) {
  const { id } = req.params;
  database.User.destroy({ where: { id } }).then((data) => res.json(data));
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
