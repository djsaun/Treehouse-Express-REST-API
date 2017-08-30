'use strict';

const express = require('express');
const app = express();
const routes = require('./routes');
const jsonParser = require('body-parser').json;
const logger = require('morgan');
const mongoose = require('mongoose');

app.use(logger('dev')); // configures middleware to give status codes for API responses

app.use(jsonParser());

mongoose.connect("mongodb://localhost:27017/qa");

const db = mongoose.connection;

db.on("error", function(err){
	console.error("connection error:", err);
});

db.once("open", function(){
	console.log("db connection successful");
});

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*") // Restrict domains that the API can resond to. * Means requests can be made to the API from any domain
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept") // Tells the client which headers are permitted in their request

	// Grant pre-flight requests permission
	if (req.method === "OPTIONS") {
		res.header("Access-Control-Allow-Methods", "PUT, POST, DELETE");
		return res.status(200.json({}));
	}
	next();
});

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
