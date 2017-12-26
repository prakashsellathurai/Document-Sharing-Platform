#!/usr/bin/env nodejs
'use strict'
////////////////////////////////
////LIBRARIES AND DATABASE DRIVERS
//////////////////////////////
var server_addr = process.env.ARANGODB_SERVER ? process.env.ARANGODB_SERVER : 'http://localhost:8529';
//var ignore = console.log("Using DB-Server " + server_addr);
var Database = require("arangojs");

var login = require('./routes/loginRoutes')
if (server_addr !== "none") {
    var db = new Database({
    url:server_addr,
    name: 'nbeings',
    username: 'root',
    password: '1729'}); 
              // configure server
  }