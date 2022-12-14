// Exercício da aula do dia 06/12/2022
// 1 - Excluir o model de imoveis
// 2 - Criar o model de imóveis utilizando o padrão do Sequelize
// 3 - Alterar o método de createImmobile para utilizar o novo model
// 4 - Alterar o método updateById para utilizar o novo model
// 5 - Alterar o método deleteById para utilizar o novo model
// 6 - Alterar o método showEditPage para utilizar o novo model

const database = require("../database/models");

async function showCreatePage(req, res) {
  let findAllCategories = await database.Category.findAll();
  return res.render("createImmobile", { categories: findAllCategories });
}

async function createImmobile(req, res) {
  // Se tiver req.file, vamos usar o req.file
  // Se não, vamos usar o picture
  const { picture, price, status, description, category } = req.body;

  let fileLocation = "";

  if (req.file) {
    fileLocation = `/uploads/${req.file.filename}`;
  } else {
    fileLocation = picture;
  }

  await database.Immobile.create({
    picture: fileLocation,
    price,
    istatus: status,
    idescription: description,
    category_id: category,
  });
  return res.redirect("/");
}

async function showEditPage(req, res) {
  const { id } = req.params;
  let findAllCategories = await database.Category.findAll();
  const immobile = await database.Immobile.findOne({
    where: { id },
  });
  return res.render("updateImmobile", {
    immobile,
    categories: findAllCategories,
  });
}

async function updateById(req, res) {
  const { id } = req.params;
  const { picture, price, status, description, category } = req.body;
  // Se tiver req.file, vamos usar o req.file
  // Se não, vamos usar o picture
  let fileLocation = "";

  if (req.file) {
    fileLocation = `/uploads/${req.file.filename}`;
  } else {
    fileLocation = picture;
  }

  await database.Immobile.update(
    {
      picture: fileLocation,
      price,
      istatus: status,
      idescription: description,
      category_id: category,
    },
    {
      where: { id },
    }
  );
  return res.redirect("/");
}

async function deleteById(req, res) {
  const { id } = req.params;
  await database.Immobile.destroy({
    where: { id },
  });
  return res.redirect("/");
}

module.exports = {
  showCreatePage,
  createImmobile,
  showEditPage,
  updateById,
  deleteById,
};
