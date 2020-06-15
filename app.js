var http = require('http');
const { listeners } = require('process');
var port = process.env.POST||3000;

http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');

}).listen(port);