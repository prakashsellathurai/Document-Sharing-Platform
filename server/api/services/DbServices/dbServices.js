var dbConfig = require('../../db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery
var userCollection = dbConfig.collection.user
// exports for database services

module.exports = {
  SaveUser: (user) => {    // FUNCTION TO SAVE USER COLLECTION
    try {
      return userCollection.save(user)
                                  .then(result => {
                                    if (typeof result === 'object') { return 'user added successfully' } else return 'user is not added try again'
                                  })
    } catch (err) {
      return 'error occured to user data  sorry for the inconvience'
    }
  },

  ifEmailAlreadyExist: (email) => {
    try {
      return db.query(aqlQuery`
                       FOR doc IN ${userCollection}
                       FILTER doc.email == ${email}
                       RETURN doc
                          `)
                         .then(doc => {
                           if ((doc._result.length) > 0) return true
                           else return false
                         })
    } catch (err) {
      // return 'error occured'
        // something went wrong or
        // the document does not exist
    }
  }
  ,
  checkuser

}
