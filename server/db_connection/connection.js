#!/usr/bin/env nodejs

////////////////////////////////
////LIBRARIES AND DATABASE DRIVERS
//////////////////////////////
//var server_addr = process.env.ARANGODB_SERVER ? process.env.ARANGODB_SERVER : 'http://localhost:8529';
//var ignore = console.log("Using DB-Server " + server_addr);
var Database = require("arangojs");
 var db = new Database({url:'https://127.0.0.1:8529',
databaseName:'nbeings'}); 

              // configure server
  db.useBasicAuth("root","1729");

  module.exports = {
   addUser : function(user)
      {
          return db.listCollections();
       //collection = db.collection('users');
       //  return  collection.save(user);
      }
    }