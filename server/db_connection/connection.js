var database = require('arangojs');
var db = new database({url:'http://127.0.0.1:8529'});
db.useBasicAuth("root","1729");
const database_name = "nbeings";
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
}


}