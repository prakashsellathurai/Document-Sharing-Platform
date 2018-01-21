var routerLib = require('../../libraries/library')
var router = routerLib.router
var routeServices = require('../../services/RouteServices/User-Route-Services/create-Service-for-user')
router.route('/users/:Id/create')
   .post(function (req, res, next) {
     var body = req.body
     var time = new Date()

     routeServices.CreateService(body.topic, body.type, req.params.Id, body.data, time)
     .then(dbResult => { res.json({result: dbResult}) })
   })
 
module.exports = router
