const { postImage } = require('../models/imageModels');

exports.uploadImage = (req, res, next) => {

	postImage(req, res, ( error ) => {
		if( error ){
			res.json( { error: error } );
		} else {
			if( req.file === undefined ){
				res.json( 'Error: No File Selected' );
			} else {
				const imageName = req.file.key;
        const imageLocation = req.file.location;
				res.json({
					image: imageName,
					location: imageLocation
        });
			}
		}
	})
};