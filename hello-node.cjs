// Include the http module
var http = require('http');

// Create server instance
// Server response: 200 - OK
// Content-Type: text/html

http.createServer(function(Request, Response){

    // Handle incoming requests
    Response.writeHead(200, {'Content-Type': 'text/html'});

    // Send a response
    Response.end( '<h1>Hello Node!!!!</h1>\n' )
// Listen at port 3000
}).listen(3000);