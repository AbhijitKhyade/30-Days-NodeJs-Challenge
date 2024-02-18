//simple server in nodejs
let http = require('http');

let host = '127.0.0.1';
let port = 3000;

let server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    console.log("Server Working");
    res.end(`Welcome to node server`);
});

server.listen(port, host, (error) => {
    if (error) {
        return console.log('Error occured: ', error);
    }

    console.log('Server is listening on ' + host + ':' + port);
});