const express = require('express');
const routes = require('./routes/auth.routes');

const router = express.Router();

router.use('/', routes);

module.exports = { router };
