const ImmobileModel = require("../models/Immobile");

function index(req, res) {
  const immobileList = ImmobileModel.getAll();
  res.render("index", { immobileList });
}

module.exports = {
  index,
};
