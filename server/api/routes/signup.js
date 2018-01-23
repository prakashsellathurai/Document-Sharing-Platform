var routerLib = require('../libraries/library')
var router = routerLib.router
var routeHandler = require('../services/RouteServices/User-Route-Services/SighUpService')
var signUpHandler = routeHandler.signUpHandler

router.route('/signup')
                 .get(function (req, res, next) {
                   res.json({result: {msg: 'sign up via GET not supported :)'}})   // index `/` route get request
                 })

                 .post(function (req, res, next) {
                   var postedPassword = req.headers.password
                   var postedEmail = req.headers.email
                   var msg = (!postedEmail && !postedPassword) ? 'enter the email  and password' : (!postedEmail) ? 'enter the email ' : (!postedPassword) ? 'enter the password' : 'no issues'
                   if (msg !== 'no issues') res.json({result: msg})
                   else {
                     var signupData = {email: postedEmail.toLowerCase(), password: postedPassword.toLowerCase()}
                     signUpHandler(signupData).then(msg => { res.json({ result: msg }) })
                   }
                 })
module.exports = router
