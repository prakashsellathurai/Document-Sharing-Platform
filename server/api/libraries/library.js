module.exports = (function () {
  var express = require('express')
  var app = express()
  var router = express.Router()
  var sha256 = require('crypto-js/sha256')
  var jsonwebtoken = require('jsonwebtoken')
  var lib = {
    express: express,
    app: app,
    router: router,
    sha256: sha256,
    jsonwebtoken: jsonwebtoken
  }

  return lib
})()
