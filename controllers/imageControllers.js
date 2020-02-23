const { imgUpload } = require('../models/imageModels');
const axios = require('axios');

exports.postAnImage = (req, res, next) => {
  console.log("here");
	imgUpload(req, res, ( error ) => {
		console.log( 'requestOkokok', req.file );
		if( error ){
			console.log( 'errors', error );
			res.json( { error: error } );
		} else {
			if( req.file === undefined ){
				console.log( 'Error: No File Selected!' );
				res.json( 'Error: No File Selected' );
			} else {
				const imageName = req.file.key;
        const imageLocation = req.file.location;
        console.log(imageLocation);
// Save the file name into database into profile model
				res.json({
					image: imageName,
					location: imageLocation
        });
        // axios.patch("https://k8445cuwvd.execute-api.eu-west-2.amazonaws.com/latest/api/photos/Dan", {photos: imageLocation});
			}
		}
	})
};