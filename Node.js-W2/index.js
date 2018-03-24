var http = require('http');
var fs = require('fs');
var commands = require('./commands');

var server = http.createServer(function(req, res){
    console.log('request is done '+ req.url);
    if (req.url === '/help' || req.url === ' '){
        res.writeHead(200,{'content-Type':'text/plain'});
        res.end(commands.help);
    }
}).listen(8080);

console.log('its working');