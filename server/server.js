#!/usr/bin/env nodejs
'use strict'
////////////////////////////////
////LIBRARIES AND DATABASE DRIVERS
//////////////////////////////
var server_addr = process.env.ARANGODB_SERVER ? process.env.ARANGODB_SERVER : 'http://localhost:8529';
//var ignore = console.log("Using DB-Server " + server_addr);
var Database = require("arangojs");

if (server_addr !== "none") {
    var db = new Database({
    url:server_addr,
    name: 'nbeings',
    username: 'root',
    password: '1729'}); 
              // configure server
  }
  ////////////////////////////////////////////////////////////////////////////////
/// An express app:
////////////////////////////////////////////////////////////////////////////////

var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens

// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8080; // used to create, sign, and verify tokens

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router(); 


// TODO: route to authenticate a user (POST http://localhost:8080/api/authenticate)

// TODO: route middleware to verify a token

// route to show a random message (GET http://localhost:8080/api/)
apiRoutes.get('/', function(req, res) {
  res.json({ message: 'Welcome to the coolest API on earth!' });
});

// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
  User.find({}, function(err, users) {
    res.json(users);
  });
});   


// =======================
// start the server ======
// =======================
app.listen(port);
console.log('Magic happens at http://localhost:' + port);