// Exercício da aula do dia 06/12/2022
// 1 - Excluir o model de imoveis
// 2 - Criar o model de imóveis utilizando o padrão do Sequelize
// 3 - Alterar o método de createImmobile para utilizar o novo model
// 4 - Alterar o método updateById para utilizar o novo model
// 5 - Alterar o método deleteById para utilizar o novo model
// 6 - Alterar o método showEditPage para utilizar o novo model

const ImmobileModel = require("../models/Immobile");

function showCreatePage(req, res) {
  return res.render("createImmobile");
}

function createImmobile(req, res) {
  // Se tiver req.file, vamos usar o req.file
  // Se não, vamos usar o picture
  let fileLocation = "";

  if (req.file) {
    fileLocation = `/uploads/${req.file.filename}`;
  } else {
    fileLocation = picture;
  }

  const { picture, price, status, description } = req.body;
  ImmobileModel.create(fileLocation, price, status, description);
  return res.redirect("/");
}

function showEditPage(req, res) {
  const { id } = req.params;
  const immobile = ImmobileModel.getById(id);
  return res.render("updateImmobile", { immobile });
}

function updateById(req, res) {
  const { id } = req.params;
  const { picture, price, status, description } = req.body;
  // Se tiver req.file, vamos usar o req.file
  // Se não, vamos usar o picture
  let fileLocation = "";

  if (req.file) {
    fileLocation = `/uploads/${req.file.filename}`;
  } else {
    fileLocation = picture;
  }

  ImmobileModel.update(id, fileLocation, price, status, description);
  return res.redirect("/");
}

function deleteById(req, res) {
  const { id } = req.params;
  ImmobileModel.deleteById(id);
  return res.redirect("/");
}

module.exports = {
  showCreatePage,
  createImmobile,
  showEditPage,
  updateById,
  deleteById,
};
