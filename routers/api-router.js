const apiRouter = require("express").Router();
const imageRouter = require('./image-router');


apiRouter.get("/", (req, res, next) => res.send({ msg: "Just the first endpoint" }));
apiRouter.use("/images", imageRouter);

module.exports = apiRouter;