const apiRouter = require("express").Router();
const imageRouter = require('./image-router');
// const { getAllEndpoints } = require("../controllers/api-controller");


// apiRouter.get("/", getAllEndpoints);

apiRouter.use("/upload", imageRouter);

module.exports = apiRouter;