// =======================
// routes ================
// =======================
// basic route
const routes = require('express').Router();
const db_service = require('../services/db_services');
routes.get('/', function(req, res) {
  res.status(200).json({ message: 'Connected!' });
});
routes.route('/login')
// show the form (GET http://localhost:8080/login)
     .get(
      ( req,res) =>{
        res.json({message:'this is the login form get'});
      }
     )
       // process the form (POST http://localhost:8080/login)
    .post(function(req, res) {
    
      res.json({message:'processing the login form! post'});
    });
routes.route('/signup')
//show get request in signup form
      .get(
        (req,res) => {
          res.json({message:'get form for signup not accepted'});
        }
      )
      .post((req,res)=>{
        
         var msg= db_service.addUser(req.query);
          res.json({message:msg}); 
      });
  //process the form (post  )
module.exports = routes;