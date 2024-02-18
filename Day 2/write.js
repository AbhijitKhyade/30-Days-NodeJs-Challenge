const fs = require('fs');

//write file asynchronously
let content = "Today my task is to learn File System in NodeJs.";
fs.writeFile('message.txt', content, (err) => {
    if (err) {
        throw err;
    }
    console.log("It is saved");
});

//write file synchronously
let data = "I am learning write operations in file.";
fs.writeFileSync('message.txt', data);
console.log("File Written Successfully");
