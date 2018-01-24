'use-strict'
var dbConfig = require('../../../../config/db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery

module.exports = async(type, data) => {
  var Type = dbConfig.selectType(type)
  try {
  //  console.log(data)
    var Dbresponse = await db.query(aqlQuery`INSERT ${data} INTO ${Type} RETURN NEW `).then(r => r)
   // console.log(Dbresponse)
    return Dbresponse
  } catch (e) {
    console.log(e)
  }
}
