const { postImage } = require("../models/imageModels");

exports.uploadImage = (req, res, next) => {
  return new Promise((resolve, reject) => {
    postImage(req, res, error => {
      if (error) {
        reject(error);
      } else {
        const imageName = req.file.key;
        const imageLocation = req.file.location;
        res.json({
          image: imageName,
          location: imageLocation
        });
        resolve();
      }
    });
  }).catch(next);
};
