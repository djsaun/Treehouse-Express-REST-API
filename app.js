'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');
const jsonParser = require('body-parser').json;
const logger = require('morgan');

app.use(logger('dev')); // configures middleware to give status codes for API responses

app.use(jsonParser());

app.use('/questions', routes);

// Catch 404 error and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Call error handler
app.use(function(err, req, res, next){
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  })
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`REST API server is listening on port ${port}`)
})
