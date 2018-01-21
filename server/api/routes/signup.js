var routerLib = require('../libraries/library')
var security = require('../libraries/security')
var encrypt = security.encrypt
var router = routerLib.router
var routeHandler = require('../services/RouteServices/User-Route-Services/SighUpService')
var signUpHandler = routeHandler.signUpHandler

router.route('/signup')
                 .get(function (req, res, next) {
                   res.json({msg: 'sign up via GET not supported :)'})   // index `/` route get request
                 })

                 .post(function (req, res, next) {
                   if (!req.headers.password) { res.json({result: 'enter the password'}) } else if (!req.headers.email) {
                     res.json({result: 'enter the email '})
                   } else {
                     var signupData = {
                       email: req.headers.email.toLowerCase(), // CONVERT THE DATA TO LOWER CASE
                       password: req.headers.password.toLowerCase()
                     }

                     signUpHandler(signupData).then(msg => {
                       res.json({ result: msg })
                     })
                   }
                 })
module.exports = router
