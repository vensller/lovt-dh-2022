const fs = require("fs");

function Immobile(picture, price, status, description) {
  this.picture = picture;
  this.price = price;
  this.status = status;
  this.description = description;
}

function getAll() {
  const immobileList = JSON.parse(
    fs.readFileSync("database/Immobiles.json", "utf-8")
  );
  return immobileList.map(
    (immobile) =>
      new Immobile(
        immobile.picture,
        immobile.price,
        immobile.status,
        immobile.description
      )
  );
}

function create(picture, price, status, description) {
  const newImmobile = new Immobile(picture, price, status, description);
  const immobileList = getAll();
  immobileList.push(newImmobile);
  fs.writeFileSync("database/Immobiles.json", JSON.stringify(immobileList));
}

function getById(id) {
  const immobileList = getAll();
  return immobileList[id];
}

function update(id, picture, price, status, description) {
  // Implementar a função
}

module.exports = {
  getAll,
  create,
  getById,
};
