var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var timeout = require('connect-timeout');
var mongoose = require('mongoose');
var passport = require('passport');
var jwt = require('jsonwebtoken');
var config = require('./config/database');
var fileUpload = require('express-fileupload');

//mongoose.connect(config.localdb);
mongoose.connect(config.database);

var api = require('./routes/api');
var budgetApi = require('./routes/budget');
var incomeApi = require('./routes/income');
var ExpenseApi = require('./routes/expense');
var SummaryApi = require('./routes/summary');
var ProfileApi = require('./routes/profile');
var ExpenseItemApi = require('./routes/expenseItem');
var TransactionApi = require('./routes/transaction');

var app = express();
 
app.use(fileUpload({
  limits: { fileSize: 50 * 1024 * 1024 },
}));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));
app.set('port', (process.env.PORT || 8080));
app.use(timeout('5s'));
app.use(passport.initialize());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  var url = req.url;

  if (url !== "/auth/signin" && 
      url !== "/auth/signup" &&
      url !== "/auth/reset") {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
      // verifies secret and checks exp
      jwt.verify(token, config.secret , function(err, decoded) {      
        if (err) {
          return res.json({ success: false, message: 'Failed to authenticate token.' });    
        } else {
          // if everything is good, save to request for use in other routes
          req.decoded = decoded;    
          //next();
        }
      });
    } else {
      // if there is no token
      // return an error
      return res.status(403).send({ 
          success: false, 
          message: 'access forbiden.' 
      });
    }
  }
  next();
});

app.get('/', function(req, res) {
  res.send('Page under construction.');
});

app.use('/auth', api);
//add bdget api
app.use('/api', budgetApi);
//add income routes
app.use('/api', incomeApi);
//add expense api
app.use('/api', ExpenseApi);
//add summary api
app.use('/api', SummaryApi);
//add profile api
app.use('/api', ProfileApi);
//add transactions api
app.use('/api', TransactionApi);
//add expense item api
app.use('/api', ExpenseItemApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(err);
});

app.listen(app.get('port'));
module.exports = app;