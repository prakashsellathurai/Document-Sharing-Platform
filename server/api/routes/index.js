var routerLib = require('../libraries/library')
var router = routerLib.router

var user = require('./User/index')
var signin = require('./signin')
var signup = require('./signup')
var org = require('./org/index')
var read = require('./User/read')
/* GET home page. */
router.route('/')
   .get(function (req, res, next) {
     res.json({msg: 'connection success'})   // index `/` route get request
   })
   .post(function (req, res, next) {
     res.json({msg: 'connection success'})  // index '/' route post request
   })
router.use('/Org', org)
router.use('/User', user)
router.use('/signin', signin)
router.use('/signup', signup)
router.route('/read', read)
module.exports = router
