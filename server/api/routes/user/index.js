var routerLib = require('../../libraries/library')
var router = routerLib.router
var create = require('./create')
/* GET users listing. */

router.route('/users/:Id')
   .get(function (req, res, next) {
       // '/user/' route
     res.json({vandadu: 'user'})
   })
router.route('/users/:Id/create', create)

module.exports = router