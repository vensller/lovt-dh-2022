const ImmobileModel = require("../models/Immobile");

function showCreatePage(req, res) {
  return res.render("createImmobile");
}

function createImmobile(req, res) {
  const { picture, price, status, description } = req.body;
  ImmobileModel.create(picture, price, status, description);
  return res.redirect("/");
}

function showEditPage(req, res) {
  const { id } = req.params;
  const immobile = ImmobileModel.getById(id);
  return res.render("updateImmobile", { immobile });
}

function updateById(req, res) {
  // Implementar a função
}

module.exports = {
  showCreatePage,
  createImmobile,
  showEditPage,
  updateById,
};
