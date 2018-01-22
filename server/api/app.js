var express = require('express')
var app = express()

var cors = require('cors')
var logger = require('morgan')
var helmet = require('helmet')
var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
// var jwt = require('jsonwebtoken') // used to create, sign, and verify tokens
var compression = require('compression')

var index = require('./routes/index')

var originsWhitelist = [
  'http://localhost:8100'     // this is my front-end url for developmen
]
var corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1
    callback(null, isWhitelisted)
  },
  credentials: true
}
// app.set('superSecret', config.secret) // secret variable
//
// app.use
app.use(helmet())
app.use(logger('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(compression())
app.use(cookieParser())
app.disable('x-powered-by')
app.use(cors(corsOptions)) // for development
// catch 404 and forward to error handler
/* app.use(function (req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
}) */
app.use(function (req, res, next) {
  // Enabling CORS
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,POST,PUT')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, contentType,Content-Type, Accept, Authorization')
  next()
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send('error')
})

app.use('/', index)

module.exports = app
