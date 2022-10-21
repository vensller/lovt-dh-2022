const express = require("express");
const router = express.Router();
const controller = require("../controllers/ImmobileController");
const multerUpload = require("../config/multer");

/* GET home page. */
router.get("/cadastrar", controller.showCreatePage);
router.post(
  "/cadastrar",
  multerUpload.single("file"),
  controller.createImmobile
);
router.get("/:id/editar", controller.showEditPage);
router.put("/:id/editar", multerUpload.single("file"), controller.updateById);
router.delete("/:id/editar", controller.deleteById);

module.exports = router;
