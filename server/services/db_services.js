var database = require('arangojs');
var aqlQuery =database.aqlQuery;
var db = new database({url:'http://127.0.0.1:8529'});
db.useBasicAuth("root","1729");
const database_name = "nbeings";
const user_collection =db.collection('User');
var string_helper = require('../helpers/string');
var checkVar;
db.useDatabase(database_name);

module.exports= {
verify_db : ()=>{
       db.listDatabases()
                .then((names) => {
                    if (names.indexOf(database_name) > -1){
                        db.useDatabase(database_name);
                        db.get().then(
                            ()=> console.log("Using database "+database_name),
                            error=> console.error("Error connecting to database: "+error)
                        );
                    } else {
                        db.createDatabase(database_name).then(
                            ()=> console.log("Database created successfully: "+database_name),
                            error=> console.error("Error creating database: "+error)
                        );
                    }
                });
}
,
get_db_var : () =>{
    return db;
},
 addUser :async function(request)
{ try
    {      
     var user=JSON.stringify(user={  email :request.query.email,password:request.query.password});
         user = JSON.parse(string_helper.JSONize(user));
         // do stuff here
         console.log(user);
     let q= await  db.query(aqlQuery`INSERT ${user} INTO ${user_collection}`);
     
      return "user added succesfully";

    }
 catch (error)
       {
           console.error("query failed"+err.response.body);
            return "database server eror";
       }
     
},
check_user_existence : function (request)
{
   var email = request.query.email;
   var password = request.query.password;
   email=email.replace(/\\([\s\S])|(")/g,"\\$1$2");
   password=password.replace(/\\([\s\S])|(")/g,"\\$1$2");
   (async function() {
   await db.query(aqlQuery`
   FOR doc IN ${user_collection} FILTER doc.email == ${email} AND  doc.password == ${password} 
   COLLECT WITH COUNT INTO length
   RETURN length
   `).then(
     cursor => cursor.all()
   ).then(
     docs =>{
         console.log(docs);
     if(docs > 0) 
     {
         checkVar = "is_exists";
     }
     else
          checkVar = "not exists" ;
     },
     err => console.error('Query failed:\n', err.response.body)
   );
}());

}




}
