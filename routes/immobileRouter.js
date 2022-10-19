const express = require("express");
const router = express.Router();
const controller = require("../controllers/ImmobileController");

/* GET home page. */
router.get("/cadastrar", controller.showCreatePage);
router.post("/cadastrar", controller.createImmobile);
router.get("/:id/editar", controller.showEditPage);
router.put("/:id/editar", controller.updateById);

module.exports = router;
