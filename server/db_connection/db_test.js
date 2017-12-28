		      	 .then(function (cursor) { return cursor.all();});			      
	}
  }db.useDatabase(database_name);
//var query = db.query('FOR doc IN @@user_collection FILTER doc.email == @email AND  doc.password == @password RETURN doc');
//console.log(query);
db.query(aqlQuery`
  err => console.error('Query failed:\n', err.response.body)
);
