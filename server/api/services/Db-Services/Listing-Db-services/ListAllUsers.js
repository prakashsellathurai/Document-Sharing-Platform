'use-strict'
var dbConfig = require('../../../config/db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery
var User = dbConfig.vertices.User
module.exports = {
  listAllUsers: () => {
    try {
      return db.query(aqlQuery`FOR users In ${User}
                                       RETURN {"userId":users._id,"emailId":users.email}`)
                                       .then(results => results.all())
    } catch (e) {
      console.log(e)
    }
  }
}
