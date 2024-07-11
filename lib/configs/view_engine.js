var path = require('path');

function setViewEngine(app) {
  app.set('layout', path.join(__dirname, '..', '..', 'views', 'layouts', 'default'));
  app.set('views', path.join(__dirname, '..', '..', 'views', 'pages'));
  app.set('view engine', 'ejs');
}

module.exports = {
  setViewEngine
};