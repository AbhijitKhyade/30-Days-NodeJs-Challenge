//serve-json
let http = require('http');
let fs = require('fs');
console.log("Server will listen at :  127.0.0.1:3000");

http.createServer(function (req, res) {
    //change the MIME type 
    res.writeHead(200, { 'Content-Type': 'application/json' });
    //create a JSON
    let data = {
        status: 200,
        message: 'Successful',
        result: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        code: 2000
    }
    console.log('Server Running');
    res.end(JSON.stringify(data));
}).listen(3000);