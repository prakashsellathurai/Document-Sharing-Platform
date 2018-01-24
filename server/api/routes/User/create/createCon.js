var routerLib = require('../../../libraries/library')
var router = routerLib.router
// route service
var CreateService = require('../../../services/RouteServices/User-Route-Services/Create-Route-services/createPost')

// security service
var security = require('../../../libraries/security')
router.route('/User/:Id/create/Con')
.post(async function (req, res, next) {
  var body = (req.body) ? req.body : null
  var time = new Date()

  var Topic = (body.topic) ? body.topic : null

  var data = (body.data) ? body : null

  var postedtoken = (req.headers['auth-token']) ? req.headers['auth-token'] : null
  var UserId = (req.params.Id) ? req.params.Id : null
  var verification = await security.verifyAuthToken(postedtoken)

  var msg = (!Topic) ? 'topic is not given !!!' : (!data) ? 'data is not entered' : (!postedtoken) ? 'Access denied'
      : (typeof (verification) === 'object') ? 'problem with info '
      : (typeof (verification) === 'string' && verification === 'User/' + UserId) ? 'verification done' : 'user not verified'

  if (msg === 'verification done') {
    delete body.topic
    return CreateService(Topic, 'Con', UserId, data, time).then(r => res.json({msg: r}))
  } else { res.json({msg: msg}) }
})
module.exports = router
