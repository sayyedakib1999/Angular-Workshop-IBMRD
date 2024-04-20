var cors = require('cors');
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'angular'
});

var express = require("express");
// console.log(typeof express);


var app = express();
app.use(cors());
app.get("/product",(req, res)=>{
   connection.query('SELECT * FROM productdetails',(err,result)=>{
    if(!err) {
        res.send(result);
    }
   });
   });
app.listen(9000);