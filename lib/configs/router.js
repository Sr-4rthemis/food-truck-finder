var indexRouter = require('../../routes/index');

function setRouter(app) {
  app.use('/', indexRouter);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });
}

module.exports = {
  setRouter
};