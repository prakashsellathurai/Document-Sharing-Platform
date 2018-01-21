'use strict'
module.exports = ((token) => {
  var secure = require('../../../libraries/security')
  return secure.verifyAuthToken(token).then(r => { return r }).catch(error => { if (error) return 'error' })
}
)()
