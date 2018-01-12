var routerLib = require('../libraries/library')
var router = routerLib.router
var routeHandler = require('../services/RouteServices/routeHandler')
var signUpHandler = routeHandler.signUpHandler

router.route('/signup')
                 .get(function (req, res, next) {
                   res.json({msg: 'sign up via GET not supported :)'})   // index `/` route get request
                 })

                 .post(function (req, res, next) {
                   var user = {
                     email: req.query.email.toLowerCase(), // CONVERT THE DATA TO LOWER CASE
                     password: req.query.password.toLowerCase()
                   }

                   signUpHandler(user).then(msg => {
                     res.json({ msg: msg })
                   })
                 })
module.exports = router
