'use-strict'

var dbConfig = require('../../../config/db_config')
var db = dbConfig.db
var aqlQuery = dbConfig.aqlQuery
var users = dbConfig.vertices.User

module.exports = {
  SaveUser: (user) => {    // FUNCTION TO SAVE USER COLLECTION
    try {
      return users.save(user).then(result => {
        return (typeof result === 'object') ? 'user added successfully' : 'user is not added try again'
      })
    } catch (err) {
      // console.log(e + 'in' + __filename)
      return 'error occured to user data  sorry for the inconvience'
    }
  },

  ifEmailAlreadyExist: (email) => {
    try {
      return db.query(aqlQuery`
                       FOR doc IN ${users}
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
                    FOR doc IN ${users}
                    FILTER doc.email == ${email} AND  doc.password == ${password}
                    RETURN {email:doc.email,password:doc.password,Id:doc._id}
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
                      FOR doc IN ${users}
                      FILTER doc.email == ${email} AND  doc.password == ${password}
                      RETURN doc
                      `)
                      .then(id => { return id }, error => { return (error) ? 'api error' : 'problem with sign in' })
    } catch (err) {
      return 'server api error'
    }
  }
}
