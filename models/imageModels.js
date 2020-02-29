const aws = require("aws-sdk");
const multerS3 = require("multer-s3");
const multer = require("multer");
const path = require("path");

const S3_BUCKET = process.env.S3_BUCKET;

const s3 = new aws.S3();

const postImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: S3_BUCKET,
    acl: "public-read",
    key: function(req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          path.extname(file.originalname)
      );
    }
  })
}).single("profileImage");

<<<<<<< HEAD
const postReferenceImage = multer({
  storage: multerS3({
    s3: s3,
    bucket: "face-recogonition",
    acl: "public-read",
    key: function(req, file, cb) {
      cb(
        null,
        path.basename(file.originalname, path.extname(file.originalname)) +
          "-" +
          Date.now() +
          req.params.username +
          path.extname(file.originalname)
      );
    }
  })
}).single("profileImage");

module.exports = { postImage, postReferenceImage };
=======
module.exports = { postImage };
>>>>>>> e945707c7bb37a752be7ed9468b4598cd733c71d
