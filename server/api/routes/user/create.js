'use-strict'
var routerLib = require('../../libraries/library')
var router = routerLib.router
var routeServices = require('../../services/RouteServices/User-Route-Services/create-Service-for-user')
// var tokenAuthService = require('../../services/RouteServices/User-Route-Services/User-Auth-Token-Verification-service')
var security = require('../../libraries/security')

router.route('/User/:Id/create')
   .post(function (req, res, next) {
     try {
       // varaiables
       var body = (req.body) ? req.body : null
       var time = new Date()
       var postedtoken = (req.headers['auth-token']) ? req.headers['auth-token'] : null
       var Topic = (body.topic) ? body.topic : null
       var type = (body.type) ? body.type : null
       var data = (body.data) ? body.data : null
       var UserId = (req.params.Id) ? req.params.Id : null

       // main logic
       if (!type) res.json({msg: 'provide type'})    // if type not provided
       else if (!data) { res.json({msg: 'data not provided'}) } else {
         if (!postedtoken) res.json({ result: {msg: 'Auth-token not provided'} }) // ifpostedtoken not provided
         else if (postedtoken) {
           var verification = security.verifyAuthToken(postedtoken)
           if (typeof (verification) === 'object') { res.json({msg: 'problem with info '}) } else {
             if (typeof (verification) === 'string' && verification === 'User/' + UserId) {
               routeServices.CreateService(Topic, type, UserId, data, time).then(dbResult => { res.json({result: dbResult}) })
             } else {
               res.json({msg: 'userId is not  verified dont try to hack you are monitored'})
             }
           }
         }
       }
     } catch (e) {
       console.log(e)
     }
   })

module.exports = router
