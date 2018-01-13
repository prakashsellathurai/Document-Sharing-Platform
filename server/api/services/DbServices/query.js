'use strict'
var dbConfig = require('../../db_config')
var db = dbConfig.db
async function Query (q, bv) {
  try {
    var result = await db.query({query: q}, {bindVars: bv})
       .then(cursor => cursor.all())
       .then(
           info => { return info }
           ,
           err => console.error(err.stack)
       )
  } catch (err) {
    console.error(err)
  }
  return result
}

module.exports = Query
