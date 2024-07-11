var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var favicon = require('serve-favicon');
const expressLayouts = require('express-ejs-layouts');

function setAppConfig(app) {
  app.use(expressLayouts);
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, '..', '..', 'public')));
  app.use(favicon(path.join(__dirname, '..', '..', 'public', 'images', 'favicon.ico')))
}

module.exports = {
  setAppConfig
};