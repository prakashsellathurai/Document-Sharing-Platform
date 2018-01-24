'use-strict'
var dbConfig = require('../../../../config/db_config')
var CreatedTheTopic = dbConfig.edges.CreatedTheTopic
var CreatedTheType = dbConfig.edges.CreatedTheType
var HasTopic = dbConfig.edges.HasTopic

module.exports = async(userId, timestamp, savedtype, savedtopic) => {
  try {
    // console.log(savedtype)
    //  var Type = dbConfig.selectType(type)
   // console.log(savedtopic)
    var time = { timestamp: timestamp }
    var userIdString = 'User/' + userId

    var TopicToUserEdge = await CreatedTheTopic.save(time, userIdString, savedtopic._id)
    var TypeToUserEdge = await CreatedTheType.save(time, userIdString, savedtype._result[0]._id)
    var relatedToEdge = await HasTopic.save(time, savedtype._result[0]._id, savedtopic._id)
    return {
       /* data: 'working on it' */
      topicToUserEdgeInfo: {topicId: TopicToUserEdge},
      postToUserEdgeInfo: {postId: TypeToUserEdge},
      topictopostEdge: {relation_Id: relatedToEdge}

    }
  } catch (e) {
    // console.log(e)
  }
}
