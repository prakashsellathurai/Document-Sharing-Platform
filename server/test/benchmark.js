var apiBenchmark = require('api-benchmark')

var service = {
  server1: 'http://localhost:3000'
}

var routes = { route1: {
  method: 'post',
  route: '/signin',
  headers: {
    'Cookie': 'cookieName=value',
    'Accept': 'application/json',
    'email': 'galgadot@js.com',
    'password': 'alen'
  }
}
}

apiBenchmark.measure(service, routes, function (err, results) {
  console.log(results)
  // displays some stats!
})
