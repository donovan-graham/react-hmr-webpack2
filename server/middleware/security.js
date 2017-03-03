'use strict';

const cors = require('cors');
const helmet = require('helmet');

const contentSecurityPolicy = require('./content-security-policy');

module.exports = [
  cors(),
  helmet(),
  helmet.frameguard('deny'),
  helmet.contentSecurityPolicy(contentSecurityPolicy),
];
