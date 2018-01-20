'use-strict'
var dbReadService = require('../../Db-Services/User-Db-Services/UserReadDbService')
module.exports = {
  readAll: () => {
   // return dbReadService.ReadAllCreatedThings().then(results => results).catch(e => console.log(e))
  },
  readAllUserPosts: (user) => {
    return dbReadService.GetUserGeneratedContent(user, Post).then(results => results).catch(e => console.log(e))
  },
  readAUserDos: user => {
    return dbReadService.GetUserGeneratedContent(user, Do).then(results => results).catch(e => console.log(e))
  },
  readAUserDonot: user => {
    return dbReadService.GetUserGeneratedContent(user, DoNot).then(results => results).catch(e => console.log(e))
  },
  readAUserPros: user => {
    return dbReadService.GetUserGeneratedContent(user, Post).then(results => results).catch(e => console.log(e))
  },
  readAUserCons: user => {
    return dbReadService.GetUserGeneratedContent(user, Post).then(results => results).catch(e => console.log(e))
  },
  readAUserProofs: user => {
    return dbReadService.GetUserGeneratedContent(user, Post).then(results => results).catch(e => console.log(e))
  },
  readAUserEvents: user => {
    return dbReadService.GetUserGeneratedContent(user, Post).then(results => results).catch(e => console.log(e))
  }
}
