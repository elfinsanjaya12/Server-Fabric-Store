var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require("cors");
const fs = require("fs")

var indexRouter = require('./routes/index');

// router api customer
const customerRouter = require('./routes/customer')
const usersRouter = require('./routes/users')
const productRouter = require('./routes/product')
const cartRouter = require('./routes/cart')
const addressRouter = require('./routes/address')
const transactionRouter = require('./routes/transaction')

var app = express();
// Initialize CORS
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// router api v1
app.get("/api/v1", (req, res) => {
  fs.readFile("config/apiDocs.json", (err, data) => {
    if (err) {
      res.status(400).json({
        error: err
      });
    }
    const docs = JSON.parse(data);
    res.json(docs);
  });
});

app.use('/api/v1', customerRouter)
app.use('/api/v1', usersRouter)
app.use('/api/v1', productRouter)
app.use('/api/v1', cartRouter)
app.use('/api/v1', addressRouter)
app.use('/api/v1', transactionRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
