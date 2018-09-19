const express = require('express');
const router = express.Router();

const spaces = require('../../spaces.json');

router.get('/spaces', function (req, res) {
  res.send(spaces);
});

module.exports = router;