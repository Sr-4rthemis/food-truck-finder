var createError = require('http-errors');
var express = require('express');

const { setAppConfig } = require('./lib/configs/app');
const { setViewEngine } = require('./lib/configs/view_engine');
const { setRouter } = require('./lib/configs/router');
const { setErrorHandler } = require('./lib/configs/error_handler');

var app = express();

setAppConfig(app);
setViewEngine(app);
setRouter(app);
setErrorHandler(app);

module.exports = app;
