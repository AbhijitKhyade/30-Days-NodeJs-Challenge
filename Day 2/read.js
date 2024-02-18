const fs = require('fs');

//reading file asynchronously
fs.readFile('message.txt', (err, data) => {
    if (err) {
        throw err;
    }
    console.log("Content: " + data);
});

//reading file synchronously
let filename = 'message.txt';
let content = fs.readFileSync(filename);
console.log("Content: " + content);