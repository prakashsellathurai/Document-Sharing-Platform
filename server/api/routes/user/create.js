var routerLib = require('../../libraries/library')
var router = routerLib.router

router.route('/users/:Id/create')
   .post(function (req, res, next) {
     res.json({vandadu: req.query})
   })

module.exports = router
