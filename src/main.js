// Import the 'http' module to create an HTTP server
const http = require('http');

// Create an instance of the server
// HTTP status: 200, OK
// Content-Type: text/html

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'})
    res.end('<h1>Hello Node!!!!\n')

// Listen at port 3000
}).listen(3000);