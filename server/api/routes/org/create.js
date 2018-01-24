'use-strict'
var routerLib = require('../../libraries/library')
var router = routerLib.router
//var routeServices = require('../../services/RouteServices/User-Route-Services/create-Service-for-user')
// var tokenAuthService = require('../../services/RouteServices/User-Route-Services/User-Auth-Token-Verification-service')
var security = require('../../libraries/security')

router.route('/Org/:Id/create')
   .post(function (req, res, next) {
     try {
       // varaiables
       var body = req.body
       var time = new Date()
       var postedtoken = req.headers['auth-token']
       var topic = body.topic.toLowerCase()
       var verification = security.verifyAuthToken(postedtoken)
       var type = body.type
       var data = body.data
       var UserId = req.params.Id

       // main logic
       if (!type) res.json({msg: 'provide type'})    // if type not provided
       else if (!data) {
         res.json({msg: 'data not provided'})   // if data not provided
       } else {
         if (!postedtoken) res.json({ result: {msg: 'Auth-token not provided'} }) // ifpostedtoken not provided
         else {
           if (typeof (verification) === 'object') {
             res.json({msg: 'problem with info '})
           } else {
             if (typeof (verification) === 'string' && verification === 'Org/' + req.params.Id) {
               routeServices.CreateService(topic, type, UserId, data, time).then(dbResult => { res.json({result: dbResult}) })
             } else {
               res.status(500).json({msg: 'OrgId is not  verified dont try to hack you are monitored'})
             }
           }
         }
       }
     } catch (e) {
       console.log(e)
     }
   })

module.exports = router
