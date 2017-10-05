'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/', function (req, res, next) {
  res.render('students/index', {title:'Student Mantras', _layoutFile: 'index.ejs'})
})

router.get('/:id', function (req, res, next) {
  const id = Number(req.params.id)
  // code goes here
})

router.post('/', function (req, res, next) {
  const { item } = req.body
  // code goes here
})

router.patch('/:id', function (req, res, next) {
  const id = Number(req.params.id)
  const { item } = req.body
  // code goes here
})

router.delete('/:id', function (req, res, next) {
  const id = Number(req.params.id)
  // code goes here
})

module.exports = router;
