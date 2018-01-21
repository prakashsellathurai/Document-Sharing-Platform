'use-strict'
var dbServices = require('../../Db-Services/User-Db-Services/UserCreateDbServices')

module.exports = { CreateService: async (topic, type, userId, data, timestamp) => {
  try {
    var checkTopicExistence = await dbServices.checkTopic(topic)   // check topic if already exist
// if topic exists already take that topic or create a new one
    var savedTopic = (checkTopicExistence._result.length > 0) ? checkTopicExistence._result[0] : await dbServices.saveTopic(topic) // console.log(savedTopic)
    var savedType = await dbServices.saveType(type, data)// console.log(savedType._result[0]._id)
    var createdlink = await dbServices.createLink(userId, timestamp, savedType, savedTopic)// console.log(createdlink)

    return (typeof (savedTopic) === 'object' && typeof (savedType) === 'object' && typeof (createdlink) === 'object') ? {msg: 'posted succesfully'} : {msg: 'unknown error try again'}
  } catch (e) {
    console.log(e)
  }
}

}
