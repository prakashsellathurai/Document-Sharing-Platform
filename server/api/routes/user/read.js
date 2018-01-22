var routerLib = require('../../libraries/library')
var router = routerLib.router
var ReadUser = require('../../services/Db-Services/Listing-Db-services/ListAllUsers')
router.route('/User/:Id/read')
.get(function (req, res, next) {
  ReadUser.listAllUsers().then(results => {
    res.json({'msg': results})
  })
})
router.route('/User/read')
.get(function (req, res, next) {
  ReadUser.listAllUsers().then(results => {
    res.json({'msg': results})
  })
})

router.route('/read')
.get(function (req, res, next) {
  ReadUser.listAllUsers().then(results => {
    res.json({'msg': results})
  })
})
