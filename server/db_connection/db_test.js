#!/usr/bin/env nodejs
'use strict'
////////////////////////////////
////LIBRARIES AND DATABASE DRIVERS
//////////////////////////////

//var server_addr = process.env.ARANGODB_SERVER ? process.env.ARANGODB_SERVER : 'http://localhost:8529';
//var ignore = console.log("Using DB-Server " + server_addr);
var Database = require("arangojs");




        var db = new Database('https://127.0.0.1:8529'); 
              // configure server
  db.useBasicAuth("root","1729");
 
  var bindVars = {'userKey':" userKey"};
  module.exports = {
  updateUser : function(user)
	{
		var bindVars = {'key': user.key, 'username': user.username,"email":user.email };
		return db.database('nodeapp')
				 .then(function (mydb) {return mydb.query(' INSERT { username:@username, email:@email } IN users',bindVars );})    
		      	 .then(function (cursor) { return cursor.all();});			      
	}
  }