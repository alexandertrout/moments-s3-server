const { imgUpload } = require('../models/imageModels')

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
// Save the file name into database into profile model
				res.json( {
					image: imageName,
					location: imageLocation
				});
			}
		}
	})
};