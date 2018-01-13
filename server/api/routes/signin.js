var routerLib = require('../libraries/library')
var router = routerLib.router

var routeHandler = require('../services/RouteServices/routeHandler')
var signInHandler = routeHandler.signInHandler

router.route('/signin')
      .get(function (req, res, next) {
        res.json({msg: 'sign in via GET not supported :)'})   // index `/` route get request
      })
      .post(function (req, res, next) {
        var signInData = {
          email: req.query.email,
          password: req.query.password
        }
        signInHandler(signInData).then(msg => {
          res.json({msg: msg})
        })
      })

module.exports = router
