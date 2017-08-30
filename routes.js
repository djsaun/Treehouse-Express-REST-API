'use strict';

const express = require('express');
const router = express.Router();

// GET /questions
// Route for questions collection
router.get('/', function(req, res, next) {
  res.json({
    response: 'You sent a GET request'
  });
});

// POST /questions
// Route for creating questions
router.post('/', function(req, res, next) {
  res.json({
    response: 'You sent a POST request',
    body: req.body
  });
});

// GET /questions/:id
// Route for specific questions
router.get('/:id', function(req, res, next) {
  res.json({
    response: `You sent a GET request for a specific ID: ${req.params.id}`
  });
});

module.exports = router;
