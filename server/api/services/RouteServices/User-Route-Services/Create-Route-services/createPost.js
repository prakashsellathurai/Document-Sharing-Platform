'use-strict'
var saveTopic = require('../../../Db-Services/User-Db-Services/Create-Db-Services/saveTopicServices')
var saveType = require('../../../Db-Services/User-Db-Services/Create-Db-Services/save-data&typeService')
var createLink = require('../../../Db-Services/User-Db-Services/Create-Db-Services/user-topic-post-linkServices')
var checkTopic = require('../../../Db-Services/User-Db-Services/Create-Db-Services/CheckTopicService')

module.exports = async(topic, type, userId, data, timestamp) => {
  try {
    var checkTopicExistence = await checkTopic(topic)   // check topic if already exist
  // if topic exists already take that topic or create a new one
    var savedTopic = (checkTopicExistence._result.length > 0) ? checkTopicExistence._result[0] : await saveTopic(topic) // console.log(savedTopic)
    var savedType = await saveType(type, data)// console.log(savedType._result[0]._id)
    var createdlink = await createLink(userId, timestamp, savedType, savedTopic)// console.log(createdlink)

    return (typeof (savedTopic) === 'object' && typeof (savedType) === 'object' && typeof (createdlink) === 'object') ? 'posted succesfully' : 'unknown error try again'
  } catch (e) {
   // console.log(e)
  }
}
