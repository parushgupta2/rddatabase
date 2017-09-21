var express = require('express');
var mysql = require('mysql');
var db= require('../db.js');
var body = require('body-parser');
var router = express.Router();

/* GET home page. */
router.get('/*', function(req, res) {
  res.rendFile('public/index.html');
});
router.post('/post',function(req,res){
    
   
        var request=req.body;
        console.log(request);
        var q='INSERT INTO `first` (`name`,`email`,`id`) VALUES ('+'"'+request.name+'"' +','+'"'+request.email+'"' +',NULL)';
    console.log(q);
 var con =db.connection();
    con.connect(function(err) {
   console.log("connected");
  con.query(q, function (err, result) {
    if (err) 
        {
            res.json({results:err,code:400})
            con.end();
        }
      else{
    
      res.json({results:result,code:200});
      con.end();
      }
  });
        
    });

})








module.exports = router;
