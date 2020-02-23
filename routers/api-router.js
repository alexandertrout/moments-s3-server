const apiRouter = require("express").Router();
const imageRouter = require('./image-router');

apiRouter.use("/images", imageRouter);

module.exports = apiRouter;