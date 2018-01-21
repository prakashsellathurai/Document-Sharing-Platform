var routerLib = require('../libraries/library')
var router = routerLib.router

var routeHandler = require('../services/RouteServices/User-Route-Services/SignInService')
var signInHandler = routeHandler.signInHandler

router.route('/signin')
      .get(function (req, res, next) {
        res.json({msg: 'sign in via GET not supported :)'})   // index `/` route get request
      })
      .post(function (req, res, next) {
        var signInData = {
          email: req.headers.email.toLowerCase(), // convert to lower case
          password: req.headers.password.toLowerCase()
        }
        signInHandler(signInData).then(msg => {
          res.json({result: msg})
        })
      })

module.exports = router
