var http = require('http');
//HTTP is the bulled in module in node.js which will helps us to create custome server = Live server

var server = http.createServer((req, res)=>{
res.write("Is Respons");
res.end();
}) //request is used to capture incoming data & Response Sending the data from Node of Frontend Server
server.listen(1999); 