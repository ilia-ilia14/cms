// Get dependencies
var express = require('express');
var path = require('path');
var http = require('http');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

var app = express();

// Get routing files
var index = require('./server/routes/app');
const messageRoutes = require('./server/routes/messages');
const contactRoutes = require('./server/routes/contacts');
const documentRoutes = require('./server/routes/documents');

//   establish connection
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/cms', { useMongoClient: true });
 //mongoose.connect('localhost:27017/cms');
//mongoose.openUri('localhost:27017/cms');

// Tell express to use the following parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Tell express to use the Morgan logger
app.use(logger('dev'));

// Tell express to use the specified director as the
// root directory for your web site
app.use(express.static(path.join(__dirname, 'dist')));

// Tell express to map the default route ("/") to the index route
app.use('/', index);
app.use('/messages', messageRoutes);
app.use('/contacts', contactRoutes);
app.use('/documents', documentRoutes);

// Tell express to map all other non-defined routes back to the index page
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.render("index");
});

// Define the port address and tell express to use this port
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server.
const server = http.createServer(app);

// Tell the server to start listening on the provided port
server.listen(port, function() {console.log("API running on localhost: " + port)});
