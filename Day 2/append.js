const fs = require('fs');

//append data in file asynchronously
// new_data = "I am learning append operation";
// fs.appendFile('message.txt', new_data, (err) => {
//     if (err)
//         throw err;
//     console.log("The new content was appended successfully.");
// });

//append data in file synchronoulsy
let content = "Appending data synchronouly";
fs.appendFileSync('message.txt', content);
console.log("File Appended Successfully.");