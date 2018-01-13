'use strict'
// var makeQuery = require('../DbServices/query')
var dbService = require('../DbServices/dbServices')
// exports for routes
module.exports = {
  signInHandler: (signInData) => {
    var email = signInData.email
    var password = signInData.password
    return dbService.ifUserSignInValid(email, password)
         .then(verification => {
           if (verification) {
             return dbService.GetUserCredentials(email, password)
             .then(userCredentials => {
               return {userId: userCredentials._result, msg: 'user can signin'}
             }
              )
           } else {
             return 'problem with login information'
           }
         })
    // return dbService.
  },
  signUpHandler: (signUpData) => {
    return dbService.ifEmailAlreadyExist(signUpData.email)
    .then(checkExistence => {
      if (checkExistence) { return 'email Id already exist' } else {
        return dbService.SaveUser(signUpData)
        .then(result => { return result })
      }
    })

    // else return 'user  exists already '
  },
  indexHandler: (data) => {

  },
  userHandler: (data) => {

  },
  orgHandler: (data) => {

  }
}
