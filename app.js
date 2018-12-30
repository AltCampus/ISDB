const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('./webpack.config');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
// const MongoStore = require('connect-mongo')(mongoose);
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8001;

const app = express();

app.use(cors());

// connecting mongodb
mongoose.connect('mongodb://localhost/ISDB', { useNewUrlParser: true }, (err, connection) => {
  if (err) throw err;
  console.log('connected to mongodb');
});

// use middleware for parsing body into json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setting view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/server/views'));

// Middleware of webpack
if (process.env.NODE_ENV === 'development') {
  console.log('in webpack hot middleware');
  const compiler = webpack(webpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  }));
}

// Setting middleware for passport and session
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: true }
}));
app.use(passport.initialize());
app.use(passport.session());
require('./server/modules/passport')(passport);

// routes for API Endpoints
app.use('/api/v1', require('./server/routes/api.v1'));

// routes for serving index file
app.use(require('./server/routes/index'));

// listen the port
app.listen(port, (err) => {
  if (err) throw err;
  console.log(`App is listening on http://localhost:${port}`);
});
