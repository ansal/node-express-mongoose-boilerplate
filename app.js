// Node Express Mongoose Boilerplate.
// A simple express app to get started with your express app!

// Module dependencies
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');
var passport = require('passport');
var mongostore = require('connect-mongo')(express);

// app specific modules
var config = require('./config.js');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.cookieParser());
app.use(express.bodyParser());

// mongodb connection
mongoose.connect(config.db);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongo connection error:'));
db.once('open', function callback () {
  console.log('connected to mongodb - ', config.db);
});

// mongodb session storage
app.use(express.session({
  secret: config.sessionSecret,
  store: new mongostore({
    url: config.db,
    collection : config.sessionCollection
  })
}));

// passportjs initilization
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));
// setup authentications
//authentications(passport, config);
// define the urls
//urls(app, passport);

// 404 handler
app.use(function(req, res, next){
  res.status(404);
  if (req.accepts('html')) {
    res.render('404', { url: req.url });
    return;
  }
  if (req.accepts('json')) {
    res.send({ error: 'Not found' });
    return;
  }
  res.type('txt').send('Not found');
});

var appEnvironment = app.get('env');

// development only
if ('development' == appEnvironment) {
  app.use(express.errorHandler());
}

// creates the http server
var server = http.createServer(app);
server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});