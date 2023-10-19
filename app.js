const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
const surveyRoutes = require("./routes/survey");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use( surveyRoutes.routes);

app.get('*', function(req, res){
    res.render( 'notFound');
})

let port = 3002;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);