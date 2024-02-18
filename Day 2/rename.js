const fs = require('fs');

//Asynchronously
// fs.rename('input.txt', 'message2.txt', (err) => {
//     if (err)
//         throw err;
//     console.log("File renamed successfully");
// });

//Synchronouly
fs.renameSync('message2.txt', 'input.txt');
console.log('File renamed successfully');

