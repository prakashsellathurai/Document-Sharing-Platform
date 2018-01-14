var routerLib = require('../libraries/library')
var router = routerLib.router
var routeHandler = require('../services/RouteServices/User-Route-Services/SighUpService')
var signUpHandler = routeHandler.signUpHandler

router.route('/signup')
                 .get(function (req, res, next) {
                   res.json({msg: 'sign up via GET not supported :)'})   // index `/` route get request
                 })

                 .post(function (req, res, next) {
                   var signupData = {
                     email: req.headers.email.toLowerCase(), // CONVERT THE DATA TO LOWER CASE
                     password: req.headers.password.toLowerCase()
                   }

                   signUpHandler(signupData).then(msg => {
                     res.json({ msg: msg })
                   })
                 })
module.exports = router
