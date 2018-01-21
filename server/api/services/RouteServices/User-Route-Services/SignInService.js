'use strict'
var dbService = require('../../Db-Services/User-Db-Services/UserAuthdbServices')
var security = require('../../../libraries/security')
var generateAuthtoken = security.generatekAuthToken

module.exports = {
  signInHandler: (signInData) => {
    var email = signInData.email
    var password = signInData.password
    return dbService.ifUserSignInValid(email, password)
           .then(doc => {                 // doc[0].Id return user Id
             return (typeof (doc) === 'object') ? {userId: doc[0].Id, 'Auth-token': generateAuthtoken(doc[0].Id)} : (doc === false) ? 'problem with login information' : 'un-expected error'
           })
  }
      // return dbService.
}
