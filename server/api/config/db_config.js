module.exports = (function () {
  'use strict'
  // db config file to connect with arangodb database
  var dbHost = 'http://127.0.0.1'    // database url
  var dbPort = '8529'                // database port
  var url = dbHost + ':' + dbPort
  var dbName = 'NbeingsLocalDatabase'              // database name

  /* data base connection libraries */
  var Database = require('arangojs') // arangojs library
  var qb = require('aqb')   // aqb library

  /* database autentication info */
  var dbUser = 'root'
  var dbUserpassword = '1729'

  /* db connection variables */
  const aqlQuery = Database.aqlQuery
  const db = new Database({url: url})
  db.useBasicAuth(dbUser, dbUserpassword)
  db.useDatabase(dbName)

  /* collections used in database */
    // user collection where  user data is stored
  var Do = db.collection('Do')
  var Dont = db.collection('Dont')
  var Pro = db.collection('Pro')
  var Con = db.collection('Con')
  var Post = db.collection('Post')
  var Proof = db.collection('Proof')
  var Event = db.collection('Event')
  var User = db.collection('User')
  var Org = db.collection('Org')
  var Topic = db.collection('Topic')
  var Challenge = db.collection('Challenge')

  /* edge collection */
 /* var CreatedBy = db.edgeCollection('Created-by') */
  var CreatedTheTopic = db.edgeCollection('Created-The-Topic')
  var HasTopic = db.edgeCollection('Has-Topic')
  var CreatedTheType = db.edgeCollection('Created-The-Type')
  /* vertices for graph query */
  var vertices = {
    'User': User,
    'Org': Org,
    'Topic': Topic
  }
  var types = [Do, Dont, Pro, Con]
  var selectType = (type) => {
    switch (type) {
      case 'Do':return Do
      case 'Dont':return Dont
      case 'Pro':return Pro
      case 'Con':return Con
      case 'Challenge':return Challenge
      case 'Proof':return Proof
      case 'Event':return Event
      default: return Post
    }
  }
  var edges = {
    CreatedTheTopic: 'Created-The-Topic',
    HasTopic: 'Has-Topic',
    CreatedTheType: 'Created-The-Type'
  }

  /* varaiables to export */
  var dbData = {
    db: db,
    aqlQuery: aqlQuery,
    vertices: vertices,
    edges: edges,
    qb: qb,
    types: types,
    selectType: selectType

  }

  return dbData
}())
