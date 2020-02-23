const apiRouter = require("express").Router();
const imageRouter = require('./imageRouter');

apiRouter.use("/images", imageRouter);

module.exports = apiRouter;