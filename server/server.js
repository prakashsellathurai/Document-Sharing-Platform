#!/usr/bin/env nodejs
'use strict'
////////////////////////////////
////LIBRARIES AND DATABASE DRIVERS
//////////////////////////////


  ////////////////////////////////////////////////////////////////////////////////
/// An express app:
////////////////////////////////////////////////////////////////////////////////
var login = require('./routes/loginRoutes');
var express = require('express');
var app = express();
var bodyParser  = require('body-parser');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var con=require('./db_connection/connection');
// =======================
// configuration =========
// =======================
var port = process.env.PORT || 8100; // used to create, sign, and verify tokens

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// API ROUTES -------------------

// get an instance of the router for api routes
var router = express.Router(); 

// route middleware that will happen on every request
//router.use(function(req, res, next) {

  // log each request to the console
  //console.log(req.method, req.url);

  // continue doing what we were doing and go to the route
  //next(); 
//});
// apply the routes to our application
app.use('/', router);

// test route
router.get('/', function(req, res) {
  res.json({ message: 'welcome to our upload module apis' });
 
});
//route to handle user registration

// apply the routes to our application
app.use('/', router);

// login routes
app.route('/login')

	// show the form (GET http://localhost:8080/login)
	.get(function(req, res) {
		res.send('this is the login form');
	})

	// process the form (POST http://localhost:8080/login)
	.post(function(req, res) {
	
    res.send('processing the login form!');
     // var today = new Date();
    //var users={
     // "email":req.body.email,
      //"password":req.body.password
    //}
    //connection.query('INSERT ${users} INTO local').then
    //(function(cursor){
     //   res.send(cursor);
    //});
    
    
	});
app.route('/signup')
 .get(function(req,res){
   res.send("get form under construction:)");
 })
 .post(function(req,res){

  console.log("↓↓↓↓ Add New User ↓↓↓↓");  
  // Get our form values. These rely on the "name" attributes   
  var user = {
    "email": req.query.email,
    "password": req.query.password
  };
  con.addUser(user)
    .then(
      function (result) { res.redirect('/')  },
      function (err) {
        console.error('Something went wrong:', err);
        res.send("There was a problem adding the information to the database. " + err);
      }
      );
 }
);


// =======================
// start the server ======
// =======================
app.listen(port);
console.log('server @ url http://localhost:' + port);