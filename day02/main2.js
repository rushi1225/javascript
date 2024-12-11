// number

console.log(10 / 0);

console.log(11 / 11);

console.log(0 / 0);
console.log(typeof NaN);
console.log(typeof Infinity);

// string

// single '' , double "" , bactips ``

// string concatination

const fName = "Rushi";
const sentence = "hello" + "world";
const sentence2 = "hello " + fName;

console.log(sentence2);

// using backticks
const sentenceBackticks = `Hello ${fName}, How Are You?`;
console.log(sentenceBackticks);

// object litrals

let person = {
  firstName: "Rushikesh",
  lastName: "Bhingare",
};
console.log(person);
// result
/*

firstName: "Rushikesh"
lastName: "Bhingare"
*/

console.log(person.firstName);

// how to add new property in object
person.age = 24;
person.city = "pune";

console.log(person);



// delete the property

delete person.age;
console.log(person);




// const = changes ho sakte hain but reassign nahi kr sakte

const user = {
  fName: "Rk",
  lName: "GK",
};

user.fName = "RB";

console.log(user);

// square btracket use
console.log(user["fName"]);
