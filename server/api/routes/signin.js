var routerLib = require('../libraries/library')
var router = routerLib.router
router.route('/signin')
 .get(function (req, res, next) {
   res.json({msg: 'sign in via GET not supported :)'})   // index `/` route get request
 })
 .post(function (req, res, next) {
   res.json({msg: req})
 })
module.exports = router
