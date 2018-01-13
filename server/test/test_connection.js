
   'use strict'
   var q = require('../api/services/query')
   var quer = 'FOR u IN users RETURN u'
   var db
   q(quer).then(n => { console.log(n) })

    // .then(cursor => cursor.all())
    // .then()
