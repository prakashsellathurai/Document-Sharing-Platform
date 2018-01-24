'use-strict'
var dbConfig = require('../../../../config/db_config')
var Topic = dbConfig.vertices.Topic

module.exports = async(title) => {
  try {
    let topic = {
      title: title,
      timestamp: new Date()
    }
    // console.log(topic)
    var b = await Topic.save(topic)
    return b
  } catch (e) {
    // console.log(e)
  }
}
