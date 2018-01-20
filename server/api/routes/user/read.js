var routerLib = require('../../libraries/library')
var router = routerLib.router
var ReadRouteServices = require('../../services/RouteServices/User-Route-Services/Read-Service-for-User')
router.route('/users/:Id/read')
.get(function (req, res, next) {

})
router.route('/read')
.get(function (req, res, next) {
  ReadRouteServices.readAll().then(results => res.json({query: results}))
})
