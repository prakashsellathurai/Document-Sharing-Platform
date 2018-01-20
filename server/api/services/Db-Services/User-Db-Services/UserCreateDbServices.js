'use-strict'
var dbConfig = require('../../../db_config')
var db = dbConfig.db
var CreatedBy = dbConfig.edges.Created_by
var aqlQuery = dbConfig.aqlQuery
var Topic = dbConfig.vertices.Topics
var is_Related_to = dbConfig.edges.is_Related_to
module.exports = {
  saveTopic: async(postedTopic) => {
    var topic = {
      topic: postedTopic,
      created_at: new Date()
    }
  //  var existence = await Topic.firstExample(postedTopic)// db.query(aqlQuery`FOR u IN ${Topic} FILTER u.topic == ${postedTopic} RETURN u`)
   // if (existence.count > 1) return existence
   // else {
    var b = await Topic.save(topic)
    return b
    // }
  },
  saveType: (type, posteddata) => {
    try {
      var Type = dbConfig.selectType(type)
      // console.log(Type + 'hello')
      var data = {
        data: posteddata,
        created_at: Date.now()
      }
      return db.query(aqlQuery`INSERT ${data} INTO ${Type} RETURN NEW `).then(savedtype => { return savedtype })
    } catch (e) {
     // console.log(e + 'in' + __filename)
    }
  },
  createLink: async(userId, timestamp, savedtype, savedtopic) => {
    try {
      // console.log(savedtype._result[0]._id)
    //  var Type = dbConfig.selectType(type)
     // console.log(savedtopic)
      var time = { timestamp: timestamp }
      var userIdString = 'users/' + userId

      var TopicToUserEdge = await CreatedBy.save(time, userIdString, savedtopic._id)
      var TypeToUserSdge = await CreatedBy.save(time, userIdString, savedtype._result[0]._id)
      var relatedToEdge = await is_Related_to.save(time, savedtype._result[0]._id, savedtopic._id)
      return {
        topicInfo: TopicToUserEdge,
        typeInfo: TypeToUserSdge,
        relation: relatedToEdge
      }
    } catch (e) {
      console.log(e)
    }
  },
  checkTopic: (topic) => {
    return db.query(aqlQuery`FOR topic IN ${Topic} FILTER topic.topic == ${topic} RETURN topic `).then(results => results)
  }

}
