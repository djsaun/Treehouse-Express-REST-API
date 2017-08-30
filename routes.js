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
router.get('/:qID', function(req, res, next) {
  res.json({
    response: `You sent a GET request for a specific ID: ${req.params.qID}`
  });
});

// POST /questions/:id/answers
// Route for creating an answer to a specific question
router.post('/:qID/answers', function(req, res, next) {
  res.json({
    response: 'You sent a POST request to /answers',
    questionId: req.params.qID,
    body: req.body
  });
});

// PUT /questions/:qID/answers/:aID
// Edit a single answer
router.put('/:qID/answers/:aID', function(req, res, next) {
  res.json({
    response: 'You sent a PUT request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID,
    body: req.body
  });
});

// DELETE /questions/:qID/answers/:aID
// Delete a single answer
router.delete('/:qID/answers/:aID', function(req, res, next) {
  res.json({
    response: 'You sent a DELETE request to /answers',
    questionId: req.params.qID,
    answerId: req.params.aID
  });
});

// POST /questions/:qID/answers/:aID/vote-up
// POST /questions/:qID/answers/:aID/vote-down
// Vote on a specific answer
router.post('/:qID/answers/:aID/vote-:dir', function(req, res, next) {
  res.json({
    response: `You sent a POST request to /vote-${req.params.dir}`,
    questionId: req.params.qID,
    answerId: req.params.aID,
    vote: req.params.dir
  });
});


module.exports = router;
