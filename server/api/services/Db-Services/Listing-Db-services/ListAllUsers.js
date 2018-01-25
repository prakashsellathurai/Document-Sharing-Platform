'use-strict'
var dbConfig = require('../../../config/db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery
var User = dbConfig.vertices.User
var createdtype = dbConfig.edges.CreatedTheTopic
var topic = dbConfig.vertices.Topic
module.exports = {
  listAllUsers: () => {
    try {
      return db.query(aqlQuery`FOR users In ${User}
                               RETURN {"userId":users._id,"emailId":users.email}`)
                                       .then(results => results.all())
    } catch (e) {
      console.log(e)
    }
  },
  listPost: (type) => {
    try {
      type = dbConfig.selectType(type)

      return db.query(aqlQuery`FOR u IN ${createdtype}
                               FOR v IN ${type}
                               FOR w IN ${topic}
                               FILTER v._id == u._to
                               RETURN {"userId":u._from,"postId":u._to,"description":v.description,"url":v.url,"topic":w.title}`).then(results => results.all())
    } catch (e) {
      console.log(e)
    }
  }
}
