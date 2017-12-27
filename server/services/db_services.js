var database = require('arangojs');
var db = new database({url:'http://127.0.0.1:8529'});
db.useBasicAuth("root","1729");
const database_name = "nbeings";
const user_collection = 'User';
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
 addUser :   function(user)
{
    (async function() {

          // do stuff here
         var collection = await db.collection(user_collection);
         collection.save(user);
         return "user added successfully";
         console.log("user");
        // more stuff
      }());
    // db.collection(user_collection)  
     //         .then(function (collection) { return collection.save(user);});
},
chech_if_user_exist : function (request){
   var email = request.query.email;
   var password = request.query.password;
   (async function() {
   var query = db.query('FOR doc IN @@user_collection FILTER doc.email == @email AND  doc.password == @password RETURN doc');
    if(query) return true;
     else 
         return false;
        }());
}


}