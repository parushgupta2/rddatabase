var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "parush900",
    database:"test",
    port:4000
   
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});