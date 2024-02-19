//pattern search
const fs = require('fs');
// const filename = "input.txt";
// let str = fs.readFileSync(filename).toString();
// let pattern = /man/gim;
// let myArray = str.match(pattern);
// let len = myArray.length;
// console.log("Occurrences of pattern in the string is: " + len);

//email validation
// let pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// let str = 'kjfvbdkowjb@gmail.com'
// let res = str.match(pattern);
// if (res)
//     console.log('Valid email address');
// else
//     console.log('Please enter a valid email address');

//password validation
let str = '1233eeaaS'
let pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;;

let res = str.match(pattern);
if (res) {
    console.log("Valid password");
} else {
    console.log("Not a valid password");
}
