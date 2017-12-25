'use strict'
var OrientDB = require('orientjs');

var server = OrientDB({
   host:       'localhost',
   port:       2424,
   username:   'root',
   password:   '1729'
});

var db = server.use({
   name:     'nbeings',
   username: 'root',
   password: '1729'
});