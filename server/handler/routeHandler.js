'use strict'
const db_service = require('../services/db_services');
function get_user_existence(){
    return new promise(
        function (resolve,reject) {
          await db_service.check_user_existence(req);
            
        }
    );
}
module.exports = {
    signupHandler : async function (params) {
   
         var checkUser = db_service.checkUser;
         
        
          if (checkUser=="is_exists"){
            res.json({msg:"user already exists"}) 
          }
          else if(checkUser == "not exists"){
            var _msg=db_service.addUser(req);
            res.json({msg:_msg});
          }
          }
        ).catch((err)=>{
          res.json({msg:"server error"});
        });


    } () ,
  
    }