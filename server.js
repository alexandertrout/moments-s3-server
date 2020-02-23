const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const path = require( 'path' );
const cors = require("cors");
const apiRouter = require('./routers/api-router')
const router = express.Router();
const app = express();
const port = process.env.PORT || 5000;

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use(cors());
app.use('/api', apiRouter);

if ( process.env.NODE_ENV === 'production' ) {
	// Set a static folder
	app.use( express.static( 'client/build' ) );
	app.get( '*', ( req, res ) => res.sendFile( path.resolve( __dirname, 'client', 'build', 'index.html' ) ) );
}

app.listen( port, () => console.log( `Server running on port: ${port}` ) );

module.exports = router;