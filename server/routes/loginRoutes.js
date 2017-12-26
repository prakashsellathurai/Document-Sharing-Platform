#!/usr/bin/env nodejs
'use strict'
////////////////////////////////
////LIBRARIES AND DATABASE DRIVERS
//////////////////////////////
var server_addr = process.env.ARANGODB_SERVER ? process.env.ARANGODB_SERVER : 'http://localhost:8529';
//var ignore = console.log("Using DB-Server " + server_addr);
var Database = require("arangojs");


if (server_addr !== "none") {
    var connection = new Database({
    url:server_addr,
    name: 'nbeings',
    username: 'root',
    password: '1729'}); 
              // configure server
  }

exports.signup = function(req,res){
    // console.log("req",req.body);
    var today = new Date();
    var users={
     
      "email":req.query.email,
      "password":req.query.password,
    }
    connection.query('INSERT ${users} INTO local', function (error, results, fields) {
    if (error) {
      console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      console.log('The solution is: ', results);
      res.send({
        "code":200,
        "success":"user registered sucessfully"
          });
    }
    });
  }
  
  ,exports.login = function(req,res){
    var email= req.body.email;
    var password = req.body.password;
    connection.query('SELECT * FROM users WHERE email = ?',[email], function (error, results, fields) {
    if (error) {
      // console.log("error ocurred",error);
      res.send({
        "code":400,
        "failed":"error ocurred"
      })
    }else{
      // console.log('The solution is: ', results);
      if(results.length >0){
        if([0].password == password){
          res.send({
            "code":200,
            "success":"login sucessfull"
              });
        }
        else{
          res.send({
            "code":204,
            "success":"Email and password does not match"
              });
        }
      }
      else{
        res.send({
          "code":204,
          "success":"Email does not exits"
            });
      }
    }
    });
  }

