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

module.exports = {
  getAll,
};
