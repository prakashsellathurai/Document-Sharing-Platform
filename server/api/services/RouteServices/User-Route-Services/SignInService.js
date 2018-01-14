'use strict'
var dbService = require('../../Db-Services/User-Db-Services/UserdbServices')

module.exports = {
  signInHandler: (signInData) => {
    var email = signInData.email
    var password = signInData.password
    return dbService.ifUserSignInValid(email, password)
           .then(doc => {
             return (typeof (doc) === 'object') ? {userId: doc, msg: 'user can signin'} : (doc === false) ? 'problem with login information' : 'un-expected error'
           })
  }
      // return dbService.
}
