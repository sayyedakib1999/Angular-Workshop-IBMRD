
var express = require("express");
// console.log(typeof express);


var app = express();
app.get("/user",(req, res)=>{
    res.send("Data From Database")
});
app.listen(9000);