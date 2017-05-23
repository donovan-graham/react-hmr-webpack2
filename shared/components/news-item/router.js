const express = require('express');
const fs = require('fs');
const path = require('path');

const { apiPath } = require('./fetch');

const router = express.Router();

router.get(apiPath(), (req, res) =>
  res.json(JSON.parse(fs.readFileSync(path.resolve(__dirname, '__mock__/data.json'), 'utf8'))));

module.exports = router;
