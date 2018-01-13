// '/org/ route
var routerLib = require('../../libraries/library')
var router = routerLib.router
router.route('/org')
   .get(function (req, res, next) {
       // '/user/' route
     next()
   })
module.exports = router
