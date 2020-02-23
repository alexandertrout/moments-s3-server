const imageRouter = require("express").Router();
const postAnImage = require("../controllers/imageControllers")

imageRouter.route("/").post(postAnImage);

module.exports = imageRouter;