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
    CircularJSON: CircularJSON,
    chooseType: (types, type) => {
      var object
      for (var i = 0, iLen = types.length; i < iLen; i++) {
        object = types[i]
        if (object.name === type) {
          return object.name
        } else {
          return 'Post'
        }
      }
    }
  }

  return lib
})()
