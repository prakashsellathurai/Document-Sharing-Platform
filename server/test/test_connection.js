
   'use strict'
   var dbConfig = require('../api/db_config')
   var db = dbConfig.db
   var createdBy = dbConfig.edges.createdBy
   var aqlQuery = dbConfig.aqlQuery
   var Topic = dbConfig.vertices.topics
   var types = dbConfig.types
   var type = 'Dont'
   // console.log(types)
   function getByValue4 (types, type) {
     var object

     for (var i = 0, iLen = types.length; i < iLen; i++) {
       object = types[i]

       if (object.name === type) {
         return object.name
       }
     }
   }
   var topic = {
     topic: 'hell'
   }

   // console.log(getByValue4(types, type))
   db.query('FOR u IN Topics FILTER u.topic ==' + 'hell' + ' RETURN NEW').then(c => console.log(c))
