//an array of names
let names = ['Akash', 'Pratik', 'Vidya'];
//calculating the length of array
let len = names.length;
// console.log(len);
names.push('Satish'); //add at end
// names.pop();  //remove from end
names.unshift('Alok');  //add at beginning
// names.shift();  //remove from beginning
names.reverse();
names.sort();
// names.splice(1, 2, 'Rahul', 'Nitin')   //removing and adding elements in between
// let new_arr = names.concat(["Anuj", "Kiran"]);    //concatenation with another array
let new_arr = ['Pradip', 'Lokesh'];
names = new_arr.concat(names);
let index = names.indexOf("Akash");;
let last = names.lastIndexOf("Pradip");
// console.log(last);
// console.log(index);
let str = names.join();  //return string
let str2 = new_arr.join();
// console.log(str);
// console.log(str2);
let s = names.slice(0, 3);     //returns a subarray from start to end (not included)
let s1 = names.slice(-3, -4);
console.log(s);  
//Another way to create array
// let arr = new Array(3);
// arr = [1, 3, 5];

//declare and initialize in a sinle statement
// let arr1 = new Array(2, 5, 6);
// console.log("arr: " + arr);
// console.log("arr1:" + arr1);


let a = [2, 4, 6, 8, 10];
let b = [2, 3, 4, 6, 8];
function even(value) {
    if (value % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let out = a.every(even);
let out2 = b.every(even);
// console.log("Output of array 1: " + out);
// console.log("Output of array 2: ", out2);

//filter
let c = a.filter(even);
let d = b.filter(even);
console.log("Output of array 1: ", c);
console.log("Output of array 2: ", d);

