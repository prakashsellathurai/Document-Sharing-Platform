'use -strict'
var dbConfig = require('../../../../config/db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery
var Topic = dbConfig.vertices.Topic

module.exports = async(topic) => {
  let result = db.query(aqlQuery`FOR topic IN ${Topic} FILTER topic.topic == ${topic} RETURN topic `).then(results => results)
  return result
}
