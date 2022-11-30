const express = require("express");
const router = express.Router();
const controller = require("../controllers/UserController");

router.get("/", controller.getUsers);
router.get("/:id", controller.getUserById);

module.exports = router;
