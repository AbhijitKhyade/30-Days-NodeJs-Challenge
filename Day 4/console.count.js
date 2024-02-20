// console.count('default');
// console.count('remo');
// console.count('rj');
// console.count('remo');
// console.count('remo');
// console.count('rj');
// console.count();

console.clear();
//reset count
console.count('default');
console.count('remo');  //remo=1
console.count('remo');  //remo=2
console.count('rj');    //rj=1
console.countReset('remo'); //remo = 1
console.count('remo');  //remo=2
console.countReset('remo'); //remo=1
console.count('rj');    //rj=2
console.count();        //default=2