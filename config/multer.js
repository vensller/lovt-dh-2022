const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, "imovel-" + Date.now() + ".jpeg");
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
