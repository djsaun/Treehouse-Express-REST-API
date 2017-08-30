'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');
const jsonParser = require('body-parser').json;
const logger = require('morgan');

app.use(logger('dev')); // configures middleware to give status codes for API responses

app.use(jsonParser());

app.use('/questions', routes);

app.use(function(req, res, next) {
  req.body;
  next();
});

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`REST API server is listening on port ${port}`)
})
