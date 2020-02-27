const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require("cors");
const apiRouter = require('./routers/api-router')
const router = express.Router();
const app = express();
const { PORT = 9090 } = process.env;

app.use( bodyParser.urlencoded( { extended: false } ) );
app.use( bodyParser.json() );
app.use(cors());
app.use('/api', apiRouter);

app.listen( PORT ) ;

module.exports = { router, app }