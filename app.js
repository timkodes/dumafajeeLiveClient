var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var compress = require('compression');
var errorHandler = require('errorhandler');
var path = require('path');
var app = express();
var buildController = require('./server/controllers/buildController');

app.set('port', 7000);
app.use(bodyParser());
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));
app.use(errorHandler());

app.post('/build', buildController.build.bind(buildController));

http.createServer(app).listen(app.get( 'port'), function() {
  console.log('Port: ' + app.get('port'));
});