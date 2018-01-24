'use-strict'
var lib = require('./library')
var config = require('../config/config')
var jwt = lib.jsonwebtoken
var secret = config.secret

function decode (token) {
  try {
    var decoded = jwt.decode(token, secret)
    return decoded
  } catch (e) {
    console.log(e)
    return {success: false, msg: ' failed to autenticate token'}
  }
}

module.exports = {
  encrypt: (message) => {

  },
  decrypt: (hash, password) => {

  },
  generatekAuthToken: (string) => {
    var payload = string
    var token = jwt.sign(payload, secret)
    return token
  },
  verifyAuthToken: async(token) => {
    if (token) {
      var Id = await decode(token)
      return Id
    } else {
        // if there is no token
        // return an error
      return {
        success: false,
        msg: 'No token provided.'
      }
    }
  }
}
