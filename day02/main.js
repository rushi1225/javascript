// data types in javascript
// there are 8 types of javascript

// 1. number

const age = 20;
const height = 5.5;

console.log("type of height i.e 5.5 is:-", typeof height);

// 2. bigint

const num = 123456789987456n;

console.log("type of 123456789987456n this num is:-", typeof num);

// 3. boolean

const isValid = true;
const isAllow = false;

console.log("type of isValid is:-", typeof isValid);

// 4. string

const fname = "Rushikesh";
console.log("type of name is:-", typeof fname);

//  backticks
const sentence = `my name is ${fname}`;
console.log(sentence);

// 6. undefined   = undefine is value as well as datatype

let lName;
console.log(lName);

// 7. null      = null is a typeof object
let birthDate = null;
console.log(typeof birthDate);

// 7.object   = in object we can store data in key value pairs
// everything in javascript is objet

const person = {};
console.log(typeof person);

// 8. symbol
const unique1 = Symbol(" unique value1");
const unique2 = Symbol(" unique value2");
console.log(typeof unique1);
