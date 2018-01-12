var routerLib = require('../libraries/library')
var router = routerLib.router

var user = require('./user/index')
var signin = require('./signin')
var signup = require('./signup')
var org = require('./org/index')
/* GET home page. */
router.route('/')
   .get(function (req, res, next) {
     res.json({msg: 'connection success'})   // index `/` route get request
   })
   .post(function (req, res, next) {
     res.json({msg: 'connection success'})  // index '/' route post request
   })
router.use('/org', org)
router.use('/user', user)
router.use('/signin', signin)
router.use('/signup', signup)

module.exports = router
