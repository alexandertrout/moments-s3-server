const imageRouter = require("express").Router();
const { uploadImage}  = require("../controllers/imageControllers")
const handle405 = require("../errors");

imageRouter.route("/").post(uploadImage);

module.exports = imageRouter;