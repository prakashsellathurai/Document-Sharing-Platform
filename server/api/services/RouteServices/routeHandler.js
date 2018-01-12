'use strict'
// var makeQuery = require('../DbServices/query')
var dbService = require('../DbServices/dbServices')
// exports for routes
module.exports = {
  signInHandler: (user) => {

  },
  signUpHandler: (user) => {
    return dbService.ifEmailAlreadyExist(user.email)
    .then(checkExistence => {
      if (checkExistence) { return 'user already exist' } else {
        return dbService.SaveUser(user).then(result => { return result })
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
