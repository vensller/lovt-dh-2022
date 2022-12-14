const database = require("../database/models");

async function index(req, res) {
  const immobileList = await database.Immobile.findAll();
  res.render("index", { immobileList });
}

module.exports = {
  index,
};
