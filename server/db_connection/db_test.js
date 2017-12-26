#!/usr/bin/env nodejs
////////////////////////////////
//var server_addr = process.env.ARANGODB_SERVER ? process.env.ARANGODB_SERVER : 'http://localhost:8529';
//var ignore = console.log("Using DB-Server " + server_addr);
var Database = require("arangojs");

        var db = new Database('https://127.0.0.1:8529'); 
              // configure server
  db.useBasicAuth("root","1729");
  var bindVars = {'userKey':" userKey"};
		var bindVars = {'key': user.key, 'username': user.username,"email":user.email };
