'use strict'
var dbService = require('../../Db-Services/User-Db-Services/UserAuthdbServices')

module.exports = {

  signUpHandler: (signUpData) => {
    return dbService.ifEmailAlreadyExist(signUpData.email)
      .then(checkExistence => {
        return checkExistence ? 'email Id already exist' : dbService.SaveUser(signUpData).then(result => { return result })
      })

      // else return 'user  exists already '
  }
}
