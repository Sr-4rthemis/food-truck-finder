function setErrorHandler(app) {
  app.use(function (err, req, res, next) {

    res.locals.message = err.message;
    res.locals.error = err;
  
    // render the error page
    res.status(err.status || 500);
    res.render('error', { layout: 'error' });
  });
}

module.exports = {
  setErrorHandler
};