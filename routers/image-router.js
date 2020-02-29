const imageRouter = require("express").Router();
const { uploadImage, uploadReferenceImage } = require("../controllers/imageControllers");
const { handle405 } = require("../errors");

imageRouter.route("/").post(uploadImage);

imageRouter.route("/reference/:username").post(uploadReferenceImage);

module.exports = imageRouter;
