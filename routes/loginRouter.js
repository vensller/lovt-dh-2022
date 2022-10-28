const express = require("express");
const router = express.Router();
const controller = require("../controllers/LoginController");
const loginMiddleware = require("../middlewares/LoginMiddleware");

router.get("/", controller.renderLoginPage);
router.post(
  "/",
  loginMiddleware.fieldsValidation,
  loginMiddleware.validateUser,
  controller.authenticateUser
);

module.exports = router;
