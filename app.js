const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');

const app = express();

// Setting view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/server/views'));

app.get('/', (req, res) => {
  res.render('index');
});

// Middleware of webpack
if (process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware');
  const compiler = webpack(webpackConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
}

app.listen(8001, (err) => {
  if (err) throw err;
  console.log('App is listening on http://localhost:8001');
});
