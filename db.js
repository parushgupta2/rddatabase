var mysql = require('mysql');
module.exports.connection=function(){
    
var con = mysql.createConnection({
 host: "localhost",
  user: "root",
  password: "parush900",
    database:"test",
    port:4000
});
return con;

}