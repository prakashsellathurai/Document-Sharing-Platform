module.exports = (function () {
  'use strict'
  // db config file to connect with arangodb database
  var dbHost = 'http://127.0.0.1'    // database url
  var dbPort = '8529'                // database port
  var url = 'http://127.0.0.1:8529'
  var dbName = 'db'              // database name

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
  var userCollection = db.collection('users')   // user collection where  user data is stored
  var orgCollection = db.collection('orgs')
  var topicCollection = db.collection('topics')
  var collection = {
    'user': userCollection,
    'org': orgCollection,
    'topic': topicCollection
  }
  /* varaiables to export */
  var dbData = {
    db: db,
    aqlQuery: aqlQuery,
    collection: collection,
    qb: qb
  }

  return dbData
}())
