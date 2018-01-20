module.exports = (function () {
  'use strict'
  // db config file to connect with arangodb database
  var dbHost = 'http://127.0.0.1'    // database url
  var dbPort = '8529'                // database port
  var url = 'http://127.0.0.1:8529'
  var dbName = 'db_mark1'              // database name

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
  var Created_by = db.edgeCollection('Created_by')
  var is_Related_to = db.edgeCollection('is_related_to')
  var vertices = {
    'Users': db.collection('Users'),
    'Orgs': db.collection('Orgs'),
    'Topics': db.collection('Topics')
  }
  var types = [Do, Dont, Pro, Con]
  var selectType = (type) => {
    switch (type) {
      case 'Do':return Do
      case 'Dont':return Dont
      case 'Pro':return Pro
      case 'Con':return Con
      case 'Proof':return Proof
      case 'Event':return Event
      default: return Post
    }
  }
  var edges = {
    Created_by: Created_by,
    is_Related_to: is_Related_to
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
