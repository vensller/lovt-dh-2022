function renderLoginPage(req, res) {
  return res.render("login", { errors: [], data: {} });
}

function authenticateUser(req, res) {
  console.log(req.body);
  return res.send("Ok");
}

module.exports = {
  renderLoginPage,
  authenticateUser,
};
