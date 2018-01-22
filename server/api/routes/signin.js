var routerLib = require('../libraries/library')
var router = routerLib.router

var routeHandler = require('../services/RouteServices/User-Route-Services/SignInService')
var signInHandler = routeHandler.signInHandler

router.route('/signin')
      .get(function (req, res, next) {
        res.json({msg: 'sign in via GET not supported :)'})   // index `/` route get request
      })
      .post(function (req, res, next) {
        res.json({msg: req})
        var postedEmail = req.body.email
        var postedPassword = req.body.password

        if (!postedEmail) res.json({msg: 'provide email please'})
        else if (!postedPassword) res.json({mg: 'provide the password'})
        else if (postedEmail && postedPassword) {
          var signInData = {
            email: postedEmail.toLowerCase(), // convert to lower case
            password: postedPassword.toLowerCase()
          }
          signInHandler(signInData).then(msg => {
            res.json({result: msg})
          })
        } else {
          res.json({'msg': 'server error'})
        }
      })

module.exports = router
