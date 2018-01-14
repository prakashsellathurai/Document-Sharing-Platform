'use-strict'

var dbConfig = require('../../../db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery
var userCollection = dbConfig.collection.user
// exports for database services

module.exports = {
  SaveUser: (user) => {    // FUNCTION TO SAVE USER COLLECTION
    try {
      return userCollection.save(user)
                                  .then(result => {
                                    return (typeof result === 'object') ? 'user added successfully' : 'user is not added try again'
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
  },
  ifUserSignInValid: (email, password) => {
    try {
      return db.query(aqlQuery`
                    FOR doc IN ${userCollection}
                    FILTER doc.email == ${email} AND  doc.password == ${password}
                    RETURN doc
                    `)
                    .then(doc => {
                  //    if ((doc._result.length) > 0) return 'hacked    /*this line return the fake data entered illegally into our database*/
                      return (doc._result.length === 1) ? doc._result : false
                    })
    } catch (error) {
      // return 'error occured'
        // something went wrong or
        // the document does not exist
    }
  },
  GetUserCredentials: (email, password) => {
    try {
      return db.query(aqlQuery`
                      FOR doc IN ${userCollection}
                      FILTER doc.email == ${email} AND  doc.password == ${password}
                      RETURN doc
                      `)
                      .then(id => { return id }, error => { return 'api error' })
    } catch (err) {
      return 'server api error'
    }
  }

}
