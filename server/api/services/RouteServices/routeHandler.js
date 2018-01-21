'use strict'
// var makeQuery = require('../DbServices/query')
var ListdbService = require('../Db-Services/Listing-Db-services/ListAllUsers')
// exports for routes
module.exports = {

  indexHandler: (data) => {

  },
  userHandler: async() => {
    var results = await ListdbService.listAllUsers()
    return results
  },
  orgHandler: (data) => {

  }
}
