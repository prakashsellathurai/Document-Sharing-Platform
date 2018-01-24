'use-strict'
var routerLib = require('../../libraries/library')
var router = routerLib.router

var listingDbService = require('../../services/RouteServices/routeHandler')
var create = require('./create')
var read = require('./read')
/* GET users listing. */

router.route('/User')
.get(function (req, res, next) {
  listingDbService.userHandler().then(results => {
    res.json({userList: results})
  })
})

router.route('/User/:Id')
   .get(function (req, res, next) {
       // '/user/' route
     console.log(true)
     res.json({from: '/User/' + req.params})
   })
   .post(function (req, res, next) {
     res.json({from: '/User/' + req.params})
   })
router.route('/User/:Id/create', create)
router.route('/User/:Id/read', read)

module.exports = router
