
const name = 'john';
const age =30;
//Concatenation
console.log('My name is ' + name + ' and I am ' + age);
//template string (the better way to concatenate)
console.log(`My name is ${name} and I am ${age}`)








const s= 'Hello World';
console.log(s.length); // gets length of string
console.log(s.toUpperCase()); //makes upper case
console.log(s.substring(0,7).toUpperCase()); // takes the first 8 characters of string and makes them cap
console.log(s.split('')); //splits string into an array with each letter as an index: (11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']
