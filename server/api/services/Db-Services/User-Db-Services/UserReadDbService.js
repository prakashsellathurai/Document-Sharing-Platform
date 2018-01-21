
'use-strict'

var dbConfig = require('../../../config/db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery
var createdBy = dbConfig.edges.Created_by
module.exports = {
  ReadAllCreatedThings: () => {
    try {
      return db.query(aqlQuery`FOR u IN ${createdBy} RETURN u`).then(results => results._result).catch(e => console.log(e))
    } catch (e) {
      console.log(e)
    }
  },
  GetTopicWithConnectedUsers: (topic) => {
    return db.query(aqlQuery`FOR u IN ${createdBy}
                              FILTER u._to == ${topic}
                              RETURN u`)
                              .then(results => results._result)
                              .catch(e => console.log(e))
  },
  GetUserGeneratedContent: (user, type) => {
    return db.query(aqlQuery`FOR u IN ${createdBy}
                             FOR v IN ${type}
                             FILTER u._from == ${user} 
                             FILTER u._to == v._id 
                             RETURN  {info:u,topic:v}`)
                             .then(result => result)
                             .catch(e => console.log(e))
  }
}
