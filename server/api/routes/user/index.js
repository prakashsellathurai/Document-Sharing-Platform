'use-strict'
var routerLib = require('../../libraries/library')
var router = routerLib.router
var create = require('./create')
var read = require('./read')
/* GET users listing. */

router.route('/users/:Id')
   .get(function (req, res, next) {
       // '/user/' route
     res.json({from: req.params})
   })
   .post(function (req, res, next) {
     res.json({from: req.params})
   })
router.route('/users/:Id/create', create)
router.route('/users/:Id/read', read)

module.exports = router
