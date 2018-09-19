const path = require('path');
const express = require('express');
const router = express.Router();

const spaces = require('./spaces.json');

router.use('/static', express.static(path.join(__dirname, 'public')));

router.get('/', function (req, res) {
  res.send(spaces);
});

module.exports = router;