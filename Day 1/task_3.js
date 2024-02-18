let http = require('http');
let fs = require('fs');

http.createServer(function (req, res) {
    console.log("Port number: 3000");
    res.writeHead(200, { 'Content-Type': 'text/html' });
    //read content of file
    fs.readFile('index.html', (err, data) => {
        //check errors
        if (err) {
            throw err;
        }
        console.log("Operation Success");
        //send response
        res.end(data);
    });
}).listen(3000);