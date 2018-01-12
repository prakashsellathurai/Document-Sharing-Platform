var routerLib = require('../../libraries/library')
var router = routerLib.router
/* GET users listing. */
router.route('/user')
   .get(function (req, res, next) {
       // '/user/' route
     next()
   })

module.exports = router
