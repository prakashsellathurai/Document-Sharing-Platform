module.exports = (function () {
  var express = require('express')
  var app = express()
  var router = express.Router()
  var CircularJSON = require('circular-json')
  var path = require('path')
  var logger = require('morgan')
  var helmet = require('helmet')
  var cookieParser = require('cookie-parser')
  var bodyParser = require('body-parser')
  var passport = require('passport')
  var jwt = require('jwt-simple')
  var lib = {
    express: express,
    app: app,
    router: router,
    CircularJSON: CircularJSON
  }

  return lib
})()
