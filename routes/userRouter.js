const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController");

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);
router.post("/", controller.createUser);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

// GET = Leitura
// POST = Criação de dados
// PUT = Alteração de dados
// DELETE = Remover dados

module.exports = router;
