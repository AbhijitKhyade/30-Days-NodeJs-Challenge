const fs = require('fs');

//Asynchronously
let filename = 'new.txt';
// fs.unlink(filename, (err) => {
//     if (err)
//         throw err;
//     console.log("File deleted successfully.");
// });

//Synchronously

fs.unlinkSync(filename);
console.log("File deleted successfully.");
