const imageRouter = require("express").Router();
<<<<<<< HEAD
const { uploadImage, uploadReferenceImage } = require("../controllers/imageControllers");
const { handle405 } = require("../errors");

imageRouter
  .route("/")
  .post(uploadImage)
  .all(handle405);

imageRouter.route("/reference/:username").post(uploadReferenceImage);
=======
const { uploadImage } = require("../controllers/imageControllers");
const { handle405 } = require("../errors");

imageRouter.route("/").post(uploadImage);
>>>>>>> e945707c7bb37a752be7ed9468b4598cd733c71d

module.exports = imageRouter;
