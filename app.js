var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var usersRouter = require('./routes/users');
var indexRouter = require('./routes/index')
var requestChecker  =   require('./middlewares/newmidd.js');

var userhandlerRouter = require ('./routes/loginreg')
cors = require('cors');

var passport = require('passport');
require('./routes/config/passport');


var app = express();
app.use(passport.initialize());
//app.use(requestChecker);
// view engine setup
app.use(cors());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/', usersRouter);
app.use('/', userhandlerRouter);

app.get('*', function(req, res){
    res.send('page not defined yet !!!', 404);
});
// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
